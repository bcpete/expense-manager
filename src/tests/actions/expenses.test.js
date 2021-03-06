import { addExpense, removeExpense, editExpense } from './../../actions/expenses';
import expenses from '../fixtures/expenses';

test('Should create remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });

  expect(action).toEqual({
    type : 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test('Should create edit expense action object', () => {
  const action = editExpense(1, { description: 'new description'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: {
      description: 'new description'
    }
  });
});

test('Should create an add expense action object', () => {
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// test('Should create an add expense action object with the default values', () => {
//   const action = addExpense();

//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// });