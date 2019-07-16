import React from 'react';
import ErrorBoundary from './error/ErrorBoundary';
import Chat from './ChatPage/Chat/Chat.js';
import LoginForm from './LoginPage/LoginForm.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/chat' component={Chat} />
          <Route exact path="/login" component={LoginForm} />
			</Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
