const mongoose = require('mongoose')

class Database {
    constructor (url) {
        this.#init(url).then( _ => {
            this.usersCollaction()
        })
    }

    async #init (url) {
        this.mongo = await mongoose.connect(url, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    async collaction (name, schema) {
        return await this.mongo.model(name, schema)
    }

    async usersCollaction () {
        this.users = await this.collaction('users', mongoose.Schema({
            chat_id: {
                type: Number,
                required: true,
                unique: true,
                index: true
            },
            step: {
                type: Number,
                default: 1
            },
            name: {
                type: String,
                minlength: 3,
                maxlength: 20
            },
            age: {
                type: Number,
                min: 16
            }
        }))
    }

    async findUser (chat_id) {
        return await this.users.findOne({ chat_id: chat_id })
    }

    async createUser (chat_id) {
        return await this.users.create({ chat_id: chat_id })
    }

    async setName (chat_id, name) {
        return await this.users.updateOne({ chat_id }, { name })
    }

    async setStep (chat_id, step) {
        return await this.users.updateOne({ chat_id }, { step })
    }
}


module.exports = Database
