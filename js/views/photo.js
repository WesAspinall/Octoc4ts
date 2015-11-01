import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

clickHandler(event) {
    // we got the event but we dont need it.
    this.props.onSelect(this.props.objectId);
  },

  getPhoto(data) {
    return (
      <div key={data.objectId} className="photoContainer" onClick={() => this.detailsClickHandler(data.objectId)}>
        <img src={data.Img} className="photoHome"/>
      </div>
    ); 
  }, 

  render() {
    return (
      <div>
        {this.props.photos().map(this.getPhoto)}
        <button onClick={''}>Add</button>
      </div>
    );
    
  }
}); 