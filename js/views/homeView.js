import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';

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


    render() { 
      return (
       <div className="homeContainer">
        <Header/>
          <ul className="homePhotos"> 
            {this.props.photos.map(this.processPhotos)}
           </ul>
        </div> 
      )  
    }

  });
