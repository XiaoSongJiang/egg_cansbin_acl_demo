const Service = require('egg').Service;
// const _ = require('lodash');

class UserService extends Service {
    async list() {
        return [1, 2, 3]
    }
}
module.exports = UserService;