import { createStore, combineReducers } from 'redux';
import filtersReducer from './../reducers/filterReducer';
import expensesReducer from './../reducers/expenseReducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};

