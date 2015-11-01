import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import PhotoComponent from './views/photo';
import PhotoCollection from './resources/photo_collection';
import PhotoModel from './resources/photo_model';

export default Backbone.Router.extend({

  routes: {
    ""      : "Home",
  },



initialize(appElement) {
    this.el = appElement;
    this.collection = new PhotoCollection();
    this.model = new PhotoModel();

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

    Home() {
    this.collection.fetch().then(() => {
      this.render(
        <PhotoComponent          
          onDetailsClick={(id) => this.goto('detail/' + id)}
          onAddClick={() => this.goto('add')}
          pictures={() => this.collection.toJSON()}
        />
      );
    });
  },
     

  start() {
    Backbone.history.start();
    return this;
  },

  

});

