import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from './../selectors/visibleExpenses';
import getExpenseTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p></p>
      ) : (
        <p> You have {props.expenses.length}
         expense(s) totalling 
         {numeral(getExpenseTotal(props.expenses) / 100).format('$0,0.00')}</p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);