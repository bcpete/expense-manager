import { addExpense, removeExpense, editExpense } from './../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });

  expect(action).toEqual({
    type : 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test('Should setup edit expense action object', () => {
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
  const testExpense = {
    description: 'hello',
    note: 'hello',
    amount : 5,
    createdAt : 123,
  }
  
  const action = addExpense(testExpense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...testExpense,
      id: expect.any(String)
    }
  });
});

test('Should create an add expense action object with the default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
});