import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url =     "http://congress.api.sunlightfoundation.com/committees/?apikey=4ecc7e34a6aa4cb9936e15e043526431&parent_committee_id=" + params.committee_id;
    console.log("params",params);
    console.log(url,'url')
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log('sub-committee params.parent_committee_id:', params.parent_committee_id);
      console.log('JSON Results:', responseJSON.results);
      return responseJSON.results;
    })
  }
});
