import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showCommittees() {
      console.log('showCommittees 1');
      this.sendAction('showCommittees');
    }
  }

});
