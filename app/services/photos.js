import Ember from 'ember';

export default Ember.Service.extend({
	fetchAll: function() {
		return [{
			name: 'gallery:5x3',
			width: 5,
			height: 3
		}, {
			name: 'gallery:3x5',
			width: 3,
			height: 5
		}];
	}
});
