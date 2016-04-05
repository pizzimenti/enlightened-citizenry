import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitZip() {
      var zip = this.get('zip');
      this.sendAction('zipLookup', zip);
    }
  }
});
