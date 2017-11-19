import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expense summary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with 2 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={234324153214} />);
  expect(wrapper).toMatchSnapshot();
});