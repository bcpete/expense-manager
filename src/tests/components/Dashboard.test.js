import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/Dashboard';

test('Should render dashboard component', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
})