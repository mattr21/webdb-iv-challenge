
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'burgers'}, // 1
        {name: 'tacos'}, // 2
      ]);
};
