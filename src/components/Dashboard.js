import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';

export const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;