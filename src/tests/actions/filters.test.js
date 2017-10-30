import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './../../actions/filters';
import moment from 'moment';

test('Should create a setTextFilter action object', () => {
  const action = setTextFilter('hello');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'hello',
  });
});

test('Should create a setTextFilter action object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('Should create setStartDate action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('Should create setEndDate action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('Should create a sortByAmount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('Should create a sortByDate action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});