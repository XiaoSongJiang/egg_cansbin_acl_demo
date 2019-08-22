'use strict';

module.exports = app => {
    app.router.get('/acl/list', 'acl.list');
    app.router.get('/acl/add', 'acl.add');
};