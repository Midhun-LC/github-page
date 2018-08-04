import React, { Component } from 'react';
import classes from './App.css';
import ProfileData from './containers/ProfileData/ProfileData';
import RepoData from './containers/RepoData/RepoData';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Profile}>
            <ProfileData/>
        </div>

        <div className={classes.Data}>
            <RepoData/>
        </div>
        
      </div>
    );
  }
}

export default App;
