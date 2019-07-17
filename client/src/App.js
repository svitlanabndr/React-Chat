import React from 'react';
import ErrorBoundary from './error/ErrorBoundary';
import Chat from './ChatPage/Chat/Chat.js';
import Loading from './Loading/Loading.js';
import LoginForm from './LoginPage/LoginForm.js';
import UserList from './users/index';
import UserPage from './userPage/index';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={Loading} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path='/users' component={UserList} />
          <Route exact path="/users/new" component={UserPage} />
          <Route path="/users/new/:id" component={UserPage} />
			</Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
