let { Schema, model } = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    crypto = require('crypto');

let UserSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true
    },
    verification: {
        type: Boolean,
        default: false
    },
    hash: String,
    salt: String,
    tyts: {
        type: Array,
        default: []
    },
    ayts: {
        type: Array,
        default: []
    },
    ydts: {
        type: Array,
        default: []
    },
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { msg: 'is already taken' });

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

const User = model("User", UserSchema);

module.exports = User;