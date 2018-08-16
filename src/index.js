import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flag from './Flag.js';

const Header = () => {
  return (
    <div>
      <p>I am the header bleh</p>
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <p>I am the side info</p>
    </div>
  );
};


const InfoBottom = () => {
  return (
    <div>
      <p>I am the bottom info</p>
    </div>
  );
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    //With React, typically you only need to bind the methods you pass to other components.
    //this.onFlagClick = this.onFlagClick.bind(this);   //bind function to component instance 
  }

  render() {
    return(
      <div>
        <h1>Hello! just a sample page</h1>
        <Header />
        <Flag />
        <Info /> 
        <InfoBottom />
      </div>
    );
  }
};


// ========================================
ReactDOM.render(<Main />, document.getElementById('root'))   //root is id in index.html...element name can be changed. 
