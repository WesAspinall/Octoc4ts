import $ from 'jquery';

const APP_ID = '38hg24cgj01qgYtl6xswBAwxrF560klWTBm5ODly';
const API_KEY = 'pcbwTKiAjTXPWNXd1GyrS5MqopYVuXlZ1L5axp6q';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});