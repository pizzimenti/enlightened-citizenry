import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/legislators/locate?apikey=4ecc7e34a6aa4cb9936e15e043526431&zip=" + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log('results params.zip:', params.zip);
      console.log(responseJSON.results);
      
      return responseJSON.results;
    });
  }
});
