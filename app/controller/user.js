'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    try {
      const { ctx } = this;
      const res = await ctx.service.user.list();
      ctx.body = res;
    } catch (error) {
      console.log(error)
      ctx.body = error;
    }
  }
  async single() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }
  async add() {
    const { ctx } = this;
    ctx.body = {};
  }
}

module.exports = UserController;
