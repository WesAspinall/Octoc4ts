import React from 'react';

export default React.createClass({
 
 navigateHome() {
    this.props.onNavigate('Home');
  },

navigateUpload() {
    this.props.onNavigate('uploadView');
  },

      render() {
    return (
      <div className="header">
      <div className="logo">
        <span className="insta">insta</span>
        <span className="react">react</span>
      </div>
      <div className="links">
        <div onClick={this.navigateHome} className="button-home">Home</div>
        <div onClick={this.navigateUpload} className="uploadView-button">Upload</div>
      </div>
      </div>
    );
  }
}); 