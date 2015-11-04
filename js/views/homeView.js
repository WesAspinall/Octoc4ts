import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Nav from './header';

export default React.createClass({



 processPhotos(data){

  let onPhotoSelect = this.props.onPhotoSelect;

    return (
      <div className="photoContainer" key={data.objectId} onClick ={()=> onPhotoSelect(data.objectId)}>
       <li>
         <img className="homePic" src={data.Img}/>
       </li>
      </div>
    );
  },

  navigateHandler(route) {

    this.props.onNavigate(route);

  },


  render() { 
    return (
     <div className="homeContainer">
      <Nav onNavigate={this.navigateHandler}/>
        <ul className="homePhotos"> 
          {this.props.photos.map(this.processPhotos)}
         </ul>
      </div> 
    )  
  }

});
