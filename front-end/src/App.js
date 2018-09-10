import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom/Route';

import HeaderNavigation from './component/HeaderNavigation';
import Course from './component/body/Course';
import AddCourse from './component/body/AddCourse';
import Information from './component/body/Information';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <HeaderNavigation />
        </div>
        <div>
          <Route path='/Course' component={Course}/>
          <Route path='/AddCourse' component={AddCourse}/>
          <Route path='/Information' component={Information}/>
        </div>
      </div>
    );
  }
}

export default App;
