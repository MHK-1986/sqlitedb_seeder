const { faker } = require('@faker-js/faker');
const times = require('lodash.times')
module.exports = {
    async up(queryInterface, sequelize) {
        await queryInterface.bulkInsert("users", userSeeder())
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    }
};

function userSeeder() {
    const users = [
        { 'usernamr': 'tim', 'password': 'tim123' },
        { 'usernamr': 'kate', 'password': 'kate123' }
    ]


    

    return users
}
