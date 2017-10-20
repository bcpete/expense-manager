import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/visibleExpenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();
const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 200}));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 500, createdAt: 125}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));