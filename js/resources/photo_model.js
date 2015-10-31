import Backbone from 'Backbone';

let PhotoModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/rollsroyce',

  idAttribute: 'objectId'

});

export default PhotoModel;