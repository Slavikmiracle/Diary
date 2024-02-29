const express = require("express")
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const { QueryTypes } = require('sequelize')
const middleWare = require('./authMiddleware')

function test(req, res, next){
    console.log("Выполнился запрос")
    next()
}

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', test, router)


app.get('/asd', middleWare, (req, res) => {
    res.status(200).json({message: 'Working'})
})


app.get('/test', async(req, res) => {
const users = await sequelize.query('SELECT * FROM users', {
    // тип запроса - выборка
    type: QueryTypes.SELECT,
  })
  console.log(users)
  res.send(users)
})
  

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server start on ${PORT} `))
    }
    catch(e){
        console.log(e)
    }
}

start()


