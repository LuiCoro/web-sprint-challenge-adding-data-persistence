exports.up = function (knex) {
  return knex.schema
      .createTable('projects', (tbl) => {
        tbl.increments('project_id')
        tbl.text('project_name').notNullable()
        tbl.text('project_description', 200)
        tbl.boolean('project_completed').defaultTo(false)
      })
      .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resource_name').notNullable()
        tbl.text('resource_description', 200)
      })
      .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.text('task_description', 200).notNullable()
        tbl.text('task_notes', 200)
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
      })
      .createTable('project_resources', tbl => {
        tbl.increments('project_resource_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT")

        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
      })
};

exports.down = function (knex) {
  return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')

};