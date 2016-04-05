import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showListBills1(){
      console.log("show List Bills 1 runs");
      this.sendAction("showListBills2");
    }
  }
});
