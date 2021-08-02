exports.up = function (knex) {
  return knex.schema.createTable('tasks', (tbl) => {
    tbl.increments('task_id');
    tbl.text('task_description').notNullable();
    tbl.text('task_notes');
    tbl.boolean('task_completed');
    tbl
      .integer('project_id')
      .unsigned()
      .references('project_id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks');
};
