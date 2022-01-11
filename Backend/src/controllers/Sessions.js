const connection = require('../database')

module.exports = {
    async create(req, res, next){
        try{
            const {username, password} = req.body

            const user = await connection('users').where('username', username).first()
            const pass = await connection('users').where('password', password).first()

            if(!user || !pass){
                return res.status(400).json({error: 'username or password invalid'})
            }

            return res.json({message: 'sucess'})
        }catch(error){
            next(error)
        }
    }
}