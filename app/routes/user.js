'use strict';

module.exports = app => {
    app.router.get('/user/list', 'user.list');
    app.router.get('/userinfo/:id', 'user.single');
    app.router.get('/user/add', 'user.add');
};