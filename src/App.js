import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_Key = 'AIzaSyCMUiUmkeW7Y01g-g5yuXC7njs0vrnOYVk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
export default App;
