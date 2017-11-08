import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters = {filters}
      setTextFilter = {setTextFilter}
      sortByAmount = {sortByAmount}
      sortByDate = {sortByDate}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />);
});

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value: 'hello'
    }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith('hello');
});

test('Should handle sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date'
    }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('Should handle sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount'
    }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});