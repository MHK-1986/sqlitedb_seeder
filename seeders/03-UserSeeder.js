const { faker } = require('@faker-js/faker');
const times = require('lodash.times')
module.exports = {
    async up(queryInterface, sequelize) {
        await queryInterface.bulkInsert("business_users", userSeeder())
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("business_users", null, {});
    }
};

function userSeeder() {
    const users = [
        { 'username': 'tim', 'password': 'tim123' },
        { 'username': 'kate', 'password': '12345' }
    ]


    

    return users
}
