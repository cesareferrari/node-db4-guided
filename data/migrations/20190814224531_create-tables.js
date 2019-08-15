
exports.up = function(knex) {
  return (knex.schema
    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('zoo_name', 128)
          .notNullable()
          .unique();
        tbl.string('address', 128)
          .notNullable()
          .unique();
    })
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('species_name', 128)
          .notNullable()
          .unique();
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('animal_name', 128);
        tbl.integer('species_id')
          .unsigned()
          .notNullable()
          .references('species.id');
          // or... .inTable('species')
    })
    .createTable('zoo_animals', tbl => {
        tbl.integer('animal_id')
          .unsigned()
          .notNullable()
          .references('animals.id');
        tbl.integer('zoo_id')
            .unsigned()
            .notNullable()
            .references('zoos.id');
        tbl.primary(['zoo_id', 'animal_id']);
    })
  );
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
    )
};
