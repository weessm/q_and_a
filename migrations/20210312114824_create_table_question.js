
exports.up = function (knex) {
    return knex.schema.createTable('question', (table) => {
        table.increments('question_id').primary();
        table.string('question_title').notNullable();
        table.text('question_description').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('question')
};
