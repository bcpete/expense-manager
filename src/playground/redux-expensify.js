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
})
//set_start_date
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})
//set_end_date
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})
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
  console.log(store.getState());
});

//add expense calls
const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));

const expenseTwo = store.dispatch(addExpense({ description: 'food', amount: 10000 }));

//remove expense calls
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//edit expense calls
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//set text filter calls
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

//sort by filter calls
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//setstart and setend date calls
store.dispatch(setStartDate(125));
store.dispatch(setEndDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate());

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
