const { faker } = require('@faker-js/faker');
const times = require('lodash.times')
module.exports = {
    async up(queryInterface, sequelize) {
        await queryInterface.bulkInsert("localbusiness", localBusinessSeeder())
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("localbusiness", null, {});
    }
};

function localBusinessSeeder() {
    const localbusinesses = times(350, (localbusiness) => ({
        name: faker.company.name(),
        type: faker.commerce.productAdjective(),
        country: faker.location.country(), 
        region:faker.location.city(),
        lon:faker.location.latitude({ max: 10, min: -10, precision: 5 }),
        lat:faker.location.latitude({ max: 10, min: -10, precision: 5 }),
        description:faker.lorem.sentence({ min: 3, max: 5 }),
        recommendations:faker.number.int(10),
    }))

    return localbusinesses
}
