import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    zipLookup(params) {
      console.log('zipLookup at index recieved:', params);
      this.transitionTo('legislators', params.zip);//transition to legislators page so we can have zip code in URL.
    },
    showCommittees3(){
      console.log('showCommittees at index recieved');
      this.transitionTo('committees');
    },
    showListBills3(){
      console.log('SL Bills 3 runs');
      this.transitionTo('bills');
    }



  }
});
