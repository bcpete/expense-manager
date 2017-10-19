import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//add_expense
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount =0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//remove_expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
//edit_expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//set_text_filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
//sort_by_amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
//sort_by_date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
//set_start_date
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});
//set_end_date
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});
//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if (sortBy === 'amount'){
      return a.amount > b.amount ? -1: 1;
    }
  });
};
//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !==action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      });
    default: 
      return state
  }
};

//Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type){
    default: 
      return state
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
  }
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//add expense calls
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));

const expenseTwo = store.dispatch(addExpense({ description: 'food', amount: 5000, createdAt: 1000 }));

//remove expense calls
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// //edit expense calls
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// //set text filter calls
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// //sort by filter calls
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// //setstart and setend date calls
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

const demoState = {
  expenses: [{
    id: 'kfdls;ajf',
    description: 'something',
    note: 'a note',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
