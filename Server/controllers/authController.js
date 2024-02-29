const ApiError = require('../apiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '10h'}
    )
}

class AuthController {
    async registration(req, res, next) {
        const {login, passwd, role} = req.body
        if (!login || !passwd) {
            res.status(403).json({ message: " asdsad"
            });
           return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(passwd, 5) 
        const user = await User.create({login, role, passwd: hashPassword})
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, passwd} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(passwd, user.passwd)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
      //  return res.json({token})
        res.json({message:"ALL RIGHT"})
    }
}

module.exports = new AuthController()


