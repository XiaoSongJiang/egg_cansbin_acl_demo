'use strict';

const Controller = require('egg').Controller;

class ACLController extends Controller {
    async add() {
        try {
            const { ctx } = this;
            let req = ctx.request;
            const username = 'test';
            let method = req.method.toUpperCase();
            let api = '/userinfo/:id';
            const res = await ctx.service.acl.addAcl(username, api, method);
            ctx.body = res;
        } catch (error) {
            console.log(error)
            ctx.body = error;
        }

    }
    async list() {
        try {
            const { ctx } = this;
            const res = await ctx.service.acl.listAcl();
            console.log(res)
            ctx.body = res;
        } catch (error) {
            console.log(error)
            ctx.body = error;
        }
    }
}

module.exports = ACLController;
