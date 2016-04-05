import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitZip() {
      var params = {
        zip: this.get('zip')
      };
      console.log('zip captured:',params.zip);
      this.sendAction('zipLookup', params);
    }
  }
});
