import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/Dashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import ExpenseHelpPage from './../components/Help';
import NotFoundPage from './../components/NotFound';
import LoginPage from './../components/Login';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/dashboard" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={ExpenseHelpPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;