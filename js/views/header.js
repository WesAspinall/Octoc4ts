import React from 'react';

export default React.createClass({

      render() {
    return (
      <div className="header">
      <div className="logo">
        <span className="insta">insta</span>
        <span className="react">react</span>
      </div>
      <div className="links">
        <div onClick={this.navigateHome} className="button-home">Home</div>
        <div onClick={this.navigateNewBand} className="button-newband">Upload</div>
      </div>
      </div>
    );
  }
}); 