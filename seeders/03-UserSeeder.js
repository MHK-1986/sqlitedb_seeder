
module.exports = {
    async up(queryInterface, sequelize) {
        await queryInterface.bulkInsert("business_users", businessUserSeeder())
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("business_users", null, {});
    }
};

function businessUserSeeder() {
    const business_users = [
        { 'username': 'tim', 'password': 'tim123' },
        { 'username': 'kate', 'password': '12345' }
    ]
    return business_users
}
