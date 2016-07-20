exports.up = function(knex, Promise) {
  return knex.schema.createTable('cats', function(table){
    table.increments();
    table.string('cat');
    table.integer('owner_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats');
};
