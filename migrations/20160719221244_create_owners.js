
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', function(table){
    table.increments();
    table.string('owner');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('owners');
};
