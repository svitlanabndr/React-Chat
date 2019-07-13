import React from 'react';
import ErrorBoundary from './error/ErrorBoundary';
import Chat from './components/Chat/Chat.js';
import './App.css';

function App() {

  return (
    <div>
      <ErrorBoundary>
        <Chat />
      </ErrorBoundary>
    </div>
  );
}

export default App;
