const connection = require('../database')

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

            await connection('users').insert({
                username,
                password
            })

            return res.status(201).send()

        }catch(error){
            next(error)
        }
    }
}