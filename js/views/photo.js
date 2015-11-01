import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

clickHandler(event) {
    // we got the event but we dont need it.
    this.props.onSelect(this.props.objectId);
  },

 addClickHandler() {
    this.props.onAddClick();
  },

  getPhoto(data) {
    return (
      <div key={data.objectId} className="photoContainer" 
        onClick={() => 
        this.ClickHandler(data.objectId)}>

        <img src={data.Img} className="photoHome"/>
      </div>
    ); 
  }, 

  render() {
    return (
      <div className="outer">
        <div className="main-header">
          <h2>Pictures</h2>
          <div className="main-button">
            <button className="main-add" onClick={this.addClickHandler}>Add Picture</button>
          </div>          
        </div>

      <div className="thumbnail-list">
        {this.props.data.map(this.getPhoto)}
      </div>

     </div>
    );
  }
}); 