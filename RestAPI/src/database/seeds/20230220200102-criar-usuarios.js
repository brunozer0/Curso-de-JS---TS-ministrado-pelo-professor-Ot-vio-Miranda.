const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'bruno',
      email: 'bruno1 @gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'bruno2',
      email: 'bruno2@gmail.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'bruno3',
      email: 'bruno3@gmail.com',
      password_hash: await bcryptjs.hash('564321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],

    {},
  ),

  down: () => {},
};
