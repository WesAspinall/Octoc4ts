import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import PhotoModel from './resources/photoModel';
import PhotoCollection from './resources/photoCollection';

import HomeComponent from './views/homeView';

export default Backbone.Router.extend({

    routes: {
    ''             : "redirectToHome",
    "Home"         : "homePage",
    "Home/:id"     : "getDetails"
  },

initialize(appElement) {

    this.el = appElement;
    this.collection = new PhotoCollection();

},

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

render(component){
  ReactDom.render(component, this.el);
},

redirectToHome() {
  this.navigate('Home',{
    replace: true,
    trigger: true
  })
},



  homePage(){
    this.collection.fetch().then(() =>{
      let peanutButter = this.el[0]
    this.render(
      <HomeComponent
      onNavigate = {(route) => this.navigate(route,{trigger:true})}
      onPhotoSelect ={id => this.navigate(`Home/${id}`,{trigger: true})}
      photos={this.collection.toJSON()}/>, 
      peanutButter
      );
    });
  },


start() {
    Backbone.history.start();
    return this;
  },

});



