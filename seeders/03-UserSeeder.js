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
    const users = times(10, (user) => ({
        username: faker.person.firstName(),
        password: "12345", // 12345
    }))

    return users
}
