import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import RedditPage from './pages/redditPage';
// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <RedditPage />
      </Provider>
    )
  }
}

export default App;
