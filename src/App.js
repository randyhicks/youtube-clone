import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';

const API_Key = 'AIzaSyCMUiUmkeW7Y01g-g5yuXC7njs0vrnOYVk';

YTSearch({key: API_Key, term: 'surfboards'}, function(data){console.log(data)});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar />
      </div>
    );
  }
}
export default App;
