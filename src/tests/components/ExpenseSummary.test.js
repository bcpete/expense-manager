import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expense summary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with 2 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});