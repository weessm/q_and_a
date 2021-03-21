
exports.up = function (knex) {
    return knex.schema.createTable('answer', (table) => {
        table.increments('answer_id').primary();
        table.text('answer_body').notNullable();
        table.integer('question_id').unsigned().notNullable();
        table.foreign("question_id").references("question_id").inTable("question").onDelete("CASCADE")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('answer')
};
