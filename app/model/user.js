'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Mixed = Schema.Types.Mixed;
    const UserSchema = new Schema({
        id: { type: String },//唯一id
        username: { type: String },
        password: { type: String },
        desc: { type: String },//账户描述信息
        salt: { type: String },
        status: { type: Number, default: 1 },
        group: { type: Mixed },//权限组
        ct: { type: Number, default: Date.now },
    });
    return mongoose.model('user', UserSchema);
};