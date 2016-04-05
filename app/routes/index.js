import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    zipLookup(zip) {
      console.log('zipLookup at index recieved:', zip);
      this.transitionTo('results', zip);//transition to results page so we can have zip code in URL.
    }
  }
});
