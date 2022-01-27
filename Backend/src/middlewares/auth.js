// tipo de verificação que é muito saldavel para o backend, pelo fato de ser leve e utilizar paenas if's

const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // verificando se o token foi informado
    if(!authHeader){
        return res.status(401).send({error: 'No token provided'})
    }

    // verificando se existe duas partes. 1° composta pelo bearer; 2° hash
    const [scheme, token ] = authHeader.split(' ')

    if(scheme != 'Bearer'){
        return res.status(401).send({error: 'No bearer'})
    }

    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token invalido'})

        req.userId = decoded.id
        return next();
    })
}