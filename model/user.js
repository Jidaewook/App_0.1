const momngoose = require('mongoose');



const userSchema = new momngoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema);