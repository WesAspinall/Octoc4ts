import React from 'react';

export default React.createClass({

  formClickHandler() {
    this.props.onFormClick();
  },

  spinClickHandler() {
    this.props.onSpinClick();
  },

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.formClickHandler}>Go to form</button>
        <button onClick={this.spinClickHandler}>Spin to win</button>
      </div>
    );
  }

});