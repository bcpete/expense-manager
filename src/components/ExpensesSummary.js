import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from './../selectors/visibleExpenses';
import getExpenseTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpenseTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);