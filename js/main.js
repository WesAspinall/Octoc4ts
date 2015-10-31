import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import './ajax_setup.js'

let element = document.querySelector('.app');

new Router(element).start();