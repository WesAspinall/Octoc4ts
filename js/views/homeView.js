import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';


export default React.createClass({

 processPhotos(data) {
    return (
      <div className="photoContainer" key={data.objectId}>
       <li className ="block">
         <img className="homePic" src={data.Img}/>
       </li>
      </div>
    );
  },

  render() { 
    return (
     <div className="homeContainer">
       <div className="header">
          <span className ="logo"> instareact </span>
       </div>
         <ul className="homePhotos"> 
          {this.props.photos.map(this.processPhotos)}
         </ul>

     </div> 
    )  
  }

});
