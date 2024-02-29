const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login:{type: DataTypes.STRING, unique: true},
    passwd: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "Student"},
})

const Diary = sequelize.define('diary', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    mark:{type:DataTypes.INTEGER, allowNull: false},
})

User.hasMany(Diary)
Diary.belongsTo(User)

module.exports =  {
    User, 
    Diary
}