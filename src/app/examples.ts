export const examples = {
  example1: {
    tables: [
      { name: 'users', alias: 'u' },
      { name: 'orders', alias: 'o' },
    ],
    fields: [
      { table: 'users', name: 'id' },
      { table: 'users', name: 'name' },
      { table: 'orders', name: 'total' },
    ],
    joins: [
      { type: 'INNER', table: 'orders', on: 'users.id = orders.user_id' },
    ],
    wheres: [
      { field: 'users.name', typeCondition: '=', condition: '"John Doe"' },
    ],
    orders: [{ field: 'users.id', direction: 'ASC' }],
  },
  example2: {
    tables: [{ name: 'products', alias: 'p' }],
    fields: [
      { table: 'products', name: 'id' },
      { table: 'products', name: 'name' },
      { table: 'products', name: 'price' },
    ],
    joins: [],
    wheres: [{ field: 'products.price', typeCondition: '>', condition: '100' }],
    orders: [{ field: 'products.name', direction: 'DESC' }],
  },
};
