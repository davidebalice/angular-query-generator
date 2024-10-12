export const examples = {
  Users: {
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
    wheres: [{ field: 'users.name', typeCondition: '=', condition: '"Mario"' }],
    orders: [{ field: 'users.id', direction: 'ASC' }],
  },
  Products: {
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
  Customers: {
    tables: [
      { name: 'customers', alias: 'c' },
      { name: 'orders', alias: 'o' },
    ],
    fields: [
      { table: 'customers', name: 'id' },
      { table: 'customers', name: 'first_name' },
      { table: 'customers', name: 'last_name' },
      { table: 'orders', name: 'total' },
    ],
    joins: [
      {
        type: 'INNER',
        table: 'orders',
        on: 'customers.id = orders.customer_id',
      },
    ],
    wheres: [{ field: 'orders.total', typeCondition: '>', condition: '500' }],
    orders: [{ field: 'orders.total', direction: 'DESC' }],
  },
  Employees: {
    tables: [
      { name: 'employees', alias: 'e' },
      { name: 'departments', alias: 'd' },
    ],
    fields: [
      { table: 'employees', name: 'id' },
      { table: 'employees', name: 'name' },
      { table: 'departments', name: 'name', alias: 'department_name' },
    ],
    joins: [
      {
        type: 'LEFT',
        table: 'departments',
        on: 'employees.department_id = departments.id',
      },
    ],
    wheres: [
      { field: 'departments.name', typeCondition: '=', condition: '"HR"' },
    ],
    orders: [{ field: 'employees.name', direction: 'ASC' }],
  },
  Categories: {
    tables: [
      { name: 'products', alias: 'p' },
      { name: 'categories', alias: 'c' },
    ],
    fields: [
      { table: 'products', name: 'id' },
      { table: 'products', name: 'name' },
      { table: 'categories', name: 'name', alias: 'category_name' },
    ],
    joins: [
      {
        type: 'INNER',
        table: 'categories',
        on: 'products.category_id = categories.id',
      },
    ],
    wheres: [
      {
        field: 'categories.name',
        typeCondition: '=',
        condition: '"Electronics"',
      },
      { field: 'products.price', typeCondition: '<', condition: '200' },
    ],
    orders: [{ field: 'products.price', direction: 'ASC' }],
  },
};
