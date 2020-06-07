exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { user_name: "naoya", age: 5, height: 165 },
        { user_name: "kenta", age: 30, height: 180 },
        { user_name: "kouhei", age: 28, height: 179 },
      ]);
    });
};
