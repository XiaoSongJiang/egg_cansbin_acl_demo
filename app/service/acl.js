const Service = require('egg').Service;
// const _ = require('lodash');
const path = require('path');
const { newEnforcer } = require('casbin');
const model = path.resolve(__dirname, '../../config/casbinModel.conf');

class AclService extends Service {

    // 验证权限
    // return: true/false
    async authAcl(username, api, method) {
        const aclAdapter = await this.app.aclAdapter;
        const enforcer = await newEnforcer(model, aclAdapter);
        return await enforcer.enforce(username, api, method);
    }
    // 添加acl
    async addAcl(username, api, method) {
        try {
            const aclAdapter = await this.app.aclAdapter;
            const enforcer = await newEnforcer(model, aclAdapter);
            //先删除cl
            let info = await enforcer.removeFilteredPolicy(0, username, api, method);
            //再重新添加用户acl
            let res1 = await enforcer.addPolicy(username, api, method);
            console.log("res1", res1);
            return res1;
        } catch (error) {
            console.log("initUserAcl", error)
        }
    }
    async listAcl() {
        const aclAdapter = await this.app.aclAdapter;
        const enforcer = await newEnforcer(model, aclAdapter);
        const res = await enforcer.getPolicy();
        return res;
    }

}
module.exports = AclService;