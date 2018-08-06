//table should contain a list of all sub events, will depend on main event
const TABLE_NAME = 'sub_event'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()
    table.string('sub_event_name')
    table.integer('event_main_id').notNullable().references('main_event.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
