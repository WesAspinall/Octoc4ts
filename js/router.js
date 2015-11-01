import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/homeView';


const RECORD = {message: "All the things!"};

export default Backbone.Router.extend({

  routes: {
    ""      : "showHome",
  },

  initialize(appElement) {
    this.el = appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  
  showHome() {
    this.render(<HomeComponent/>);
  },


});

