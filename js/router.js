import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import{
  PhotoModel,
  PhotoCollection
} from './resources';

import{
  DetailsComponent,
  HeaderComponent,
  HomeComponent
} from './views';

export default Backbone.Router.extend({

    routes: {
    ''             : "redirectToHome",
    "home"         : "homeView",
    "home/:id"     : "getDetails",
    "upload"       : "uploadView"
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
          this.navigate('home',{
            replace: true,
            trigger: true
          })
        },

    homeView(){
    this.collection.fetch().then(() =>{
      let peanutButter = this.el[0]
    this.render(
      <HomeComponent
      onPhotoSelect ={(id) => 
      this.goto(`home/${id}`,{trigger: true})}
      photos={this.collection.toJSON()}/>, 
      peanutButter
      );
    });
  },

getDetails(id){
this.render(
  <DetailsComponent/>
  )
},


start() {
    Backbone.history.start();
    return this;
  },

});



