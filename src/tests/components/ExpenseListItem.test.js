import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should render expense list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should return 0 if no expenses', () => {
  const totalExpenses = getExpensesTotal([]);
  expect(totalExpenses).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const totalExpenses = getExpensesTotal([expenses[0]]);
  expect(totalExpenses).toBe(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {
  const totalExpenses = getExpensesTotal(expenses);
  expect(totalExpenses).toBe(114195);
});