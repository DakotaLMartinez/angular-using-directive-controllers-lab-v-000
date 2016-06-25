function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		controller: function($scope, $filter) {
			$scope.username = $filter('lowercase')($scope.username);
		},
		controllerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);