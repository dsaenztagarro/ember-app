import Ember from 'ember';

export default Ember.Service.extend({
	fetchAll: function() {
		return [{
			url: '/tmp/image1.jpg'
		}, {
			url: '/tmp/image2.jpg'
		}];
	}
});
