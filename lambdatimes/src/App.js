import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthenticate from './components/authentication/withAuthenticate';

const EmptyDiv = () => {
  return (
    <div>
      Please log in to see content
    </div>
  )
}

const ComponentWithAuthenticate = withAuthenticate(Content)(EmptyDiv);

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
