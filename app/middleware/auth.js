const _ = require('lodash');
module.exports = options => {
    return async function auth(ctx, next) {
        let req = ctx.request;
        let username = 'test'
        let method = req.method.toUpperCase();
        let path = req.path;
        if (_.includes(['acl'], _.split(path, '/')[1])) {//基础信息和白名单都是可以访问的
            await next();
        } else {
            let res = await ctx.service.acl.authAcl(username, path, method);
            if (!res) {
                ctx.body = {
                    code: 403,
                    msg: '未授权'
                }
            } else {
                await next();
            }
        }
    }
};
