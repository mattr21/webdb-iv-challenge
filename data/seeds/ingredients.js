
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'beef'},
        {name: 'turkey'},
        {name: 'chicken'},
        {name: 'pork'},
        {name: 'lettuce'},
        {name: 'tomato'},
        {name: 'bun'},
        {name: 'ketchup'},
        {name: 'hotsauce'},
        {name: 'cheese'}
      ]);
};
