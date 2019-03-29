
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'regular burger', instructions: 'form beef patty, cook burger, cut veggies, put together', dish_id: '1'},
        {name: 'turkey burger', instructions: 'form turkey patty, cook burger, cut veggies, put together', dish_id: '1'},
        {name: 'chicken tacos', instructions: 'cook chicken, cut veggies, assemble', dish_id: '2'},
        {name: 'pork tacos', instructions: 'cook pork, cut veggies, assemble', dish_id: '2'},
      ]);
};
