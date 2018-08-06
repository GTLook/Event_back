//main database table, will contain information for one fleet
const TABLE_NAME = 'data'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.integer('org_id')
    table.integer('fleet_id')
    table.integer('user_id').notNullable().references('users.id')
    table.string('event_short_id')
    table.timestamp('event_start_time') //event time start, contains date
    table.timestamp('event_end_time') //event time end, contains date
    table.integer('event_main_id').references('event_main.id')
    table.integer('event_sub_id').references('event_sub.id')
    table.text('event_comment')
    table.timestamps(true,true) //time changes and created
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
