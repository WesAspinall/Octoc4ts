import Backbone from 'backbone';
import PhotoModel from './photo_model';

let PhotoCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/rollsroyce',

  model: PhotoModel,

  parse: function(data) {
    return data.results;
  }

});

export default PhotoCollection;