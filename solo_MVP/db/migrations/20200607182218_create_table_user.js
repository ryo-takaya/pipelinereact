exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments();
    t.text("user_name").notNullable;
    t.integer("age").notNullable;
    t.integer("height").notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
