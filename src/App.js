import React, { Component } from 'react';
import Routers from './root'
import './styles/index.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
