import _ from 'lodash';
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
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('cats');
  }

  videoSearch(term) {
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}
export default App;
