const { User } = require('../models')

const userData = [
    {
        username: 'shabobble',
        platform: 'Xbox',
        email: 'shabobbleofchina@yahoo.com',
        password: 'password'
    },
    {
        username: 'Um Eww David',
        platform: 'Xbox',
        email: 'bouchardenator@gmail.com',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;