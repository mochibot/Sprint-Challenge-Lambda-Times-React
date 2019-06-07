import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentWithAuthenticate = withAuthenticate(Content)(Login);

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ComponentWithAuthenticate />
    </div>
  );
}

export default App;
