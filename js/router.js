import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import HomeComponent from './views/homeView';

export default Backbone.Router.extend({

  routes: {
    ""      : "showHome"
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

 render(HomeComponent) {
    ReactDom.render(HomeComponent, this.el);
  },

    start() {
    Backbone.history.start();
    return this;
  },

  showHome() {
    this.render(
      <HomeComponent
       onFormClick={() => 
        this.goto('form')}/>
    );
  }

});