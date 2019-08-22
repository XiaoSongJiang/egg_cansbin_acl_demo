
const MongooseAdapter = require('@elastic.io/casbin-mongoose-adapter');
const ACLADAPTER = Symbol('Application#acladapter');

module.exports = {
    get aclAdapter() {
        // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
        if (!this[ACLADAPTER]) {
            // 实际情况肯定更复杂
            this[ACLADAPTER] = MongooseAdapter.newAdapter(this.config.mongoose.client.url, this.config.mongoose.client.options);
        }
        return this[ACLADAPTER];
    },
};


