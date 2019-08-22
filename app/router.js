'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./routes/user')(app);
  require('./routes/acl')(app);
};
