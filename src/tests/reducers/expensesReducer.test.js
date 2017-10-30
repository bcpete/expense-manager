import expensesReducer from '../../reducers/expenseReducer';
import expenses from './../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, '@@INIT');

  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = ({ 
    type: 'REMOVE_EXPENSE', 
    id: expenses[0].id 
  });

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2] ]);
});

test('Should not remove id if id not found', () => {
  const action = ({ 
    type: 'REMOVE_EXPENSE', 
    id: '12'
  });

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
})

test('Should add a new expense', () => {
  const expense = {
    id: '4',
    description: 'new expense',
    createdAt: 0,
    amount: 5000
  };
  
  const action = ({
    type: 'ADD_EXPENSE',
    expense,
  });

  const state = expensesReducer(expenses, action);

  expect(state[3]).toEqual(expense);
});

test('Should edit an expense', () => {
  const expense = {
    id: '2',
    description: 'updated expense',
    createdAt: 1,
    amount: 50,
    note: '',
  };

  const action = ({
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: expense
  });

  const state = expensesReducer(expenses, action);

  expect(state[1]).toEqual(expense);
});

test('Should not edit an expense if id not found', () => {
  const action = ({
    type: 'EDIT_EXPENSE',
    id: '12'
  });

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
