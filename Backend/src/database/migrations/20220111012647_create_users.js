exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.text('username').unique().notNullable()
        table.text('password').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
