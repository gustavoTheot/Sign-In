const connection = require('../database')
const {generateToken} = require('../config/token.js')
const bcrypt = require('bcrypt')

module.exports = {
    async create(req, res, next){
        try{
            const {username, password} = req.body

            const user = await connection('users').where('username', username).first()
            const pass = await connection('users').where('password', password).first()

            
            if(!user){
                return res.status(401).json({error: 'Error'})
            }
            
            if(!bcrypt.compare(password, user.password)){
                return res.status(401).json({error: 'Error'})
            }
            
            // criando um token toda vez que ocorrer uma autenticação (login com sucesso)

            const token = generateToken({ id: user.id })
            

            return res.send({
                user,
                token,
            })
        }catch(error){
            next(error)
        }
    }
}