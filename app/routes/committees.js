import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var url = "http://congress.api.sunlightfoundation.com/committees/?apikey=4ecc7e34a6aa4cb9936e15e043526431&subcommittee=false";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  },
  actions: {
    subCommittee(commID) {
      console.log("subcom runs");
      console.log(commID);
    }
  }
});
