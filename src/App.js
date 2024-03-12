import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  }
  // apiKey = '636163702f5c48ebaafa20ed92ea2e12';
  apiKey = process.env.REACT_APP_NEWS_API;
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    console.log(this.apiKey);
    return (
      <div>
        {/* <News progress = {this.setProgress}  pageSize={6} country={'in'} category={'sports'} /> */}
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News progress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country={'in'} category={'business'} />} />
            <Route exact path="/business" element={<News progress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country={'in'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News progress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country={'in'} category={'entertainment'} />} />
            <Route exact path="/general" element={<News progress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country={'in'} category={'general'} />} />
            <Route exact path="/health" element={<News progress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News progress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News progress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country={'in'} category={'sports'} />} />
            <Route exact path="/technology" element={<News progress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country={'in'} category={'technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
