const connection = require('../database')
const {generateToken} = require('../config/token.js')
const { hash } = require('bcrypt')

module.exports = {
    async index(req, res, next){
        try{
            const results = await connection('users')

            return res.json(results)
        }catch(error){
            next(error)
        }
    },

    async create(req, res, next){
        try{   
            const {username, password} = req.body
            const passwordHash = await hash(password, 10)

            await connection('users').insert({
                username,
                password: passwordHash
            })

            return res.status(201).send({token: generateToken({id: username.id})})

        }catch(error){
            next(error)
        }
    }
}