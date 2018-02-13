import React, { Component } from 'react';
import './App.css';
import {Storage} from 'aws-amplify';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        picture: ""
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e)
  {
      console.log(e.target.files);
      var fileObj = e.target.files[0];
      let key = fileObj.name;
  
      let fileType = fileObj.type;

      Storage.put(key, fileObj, {
        contentType: fileType
      })
        .then (result => console.log(result))
        .catch(err => console.log(err));
      
        Storage.get(key)
        .then(result => console.log(result))
        .catch(err => console.log(err));
  }

  

  uploadToS3(e){

  }

  previewFile(e) {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }

    this.handleChange(e)
  }

  render() {
    return (
      <div className="App">
        <label>Select Image</label>
        <input type="file" onChange={ (e) => this.previewFile(e) } />
        <img src={this.state.picture[0]} /> 
        <div className="preview">
        </div>
      </div>
    );
  }
}

export default App;
