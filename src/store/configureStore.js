import { createStore, combineReducers } from 'redux';
import filtersReducer from './../reducers/filterReducer';
import expensesReducer from './../reducers/expenseReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeWithDevTools()
  );
  return store;
};

