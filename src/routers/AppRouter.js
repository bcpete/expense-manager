import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/Dashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import ExpenseHelpPage from './../components/Help';
import NotFoundPage from './../components/NotFound';
import LoginPage from './../components/Login';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
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
  </Router>
);

export default AppRouter;