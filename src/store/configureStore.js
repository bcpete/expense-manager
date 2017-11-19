import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filtersReducer from './../reducers/filterReducer';
import expensesReducer from './../reducers/expenseReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};