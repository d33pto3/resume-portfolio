import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Introduction from './components/introduction';
import Sidebar from './components/sidebar';
import Timeline from './components/timeline';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
