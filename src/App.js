import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
        <div className="preview">
          <p>No files currently selected for upload</p>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
