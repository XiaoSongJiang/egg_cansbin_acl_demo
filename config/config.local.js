'use strict';

module.exports = appInfo => {
    const config = exports = {};
    const userConfig = {};
    exports.mongoose = {
        client: {
            url: `mongodb://localhost:27017/acl_casbin`,
            options: {
                useFindAndModify: false,
                useNewUrlParser: true,
                native_parser: true,
                poolSize: 2,
                autoIndex: false,
            },
        },
    };
    return {
        ...config,
        ...userConfig,
    };
};