import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    zipLookup(params) {
      console.log('zipLookup at index recieved:', params);
      this.transitionTo('legislators', params.zip);//transition to legislators page so we can have zip code in URL.
    },
    showCommittees(){
      console.log('showCommittees at index recieved');
      this.transitionTo('committees');
    }



  }
});
