var filterTest = angular.module('filterTest', []);
filterTest.controller('filterTestController',function($scope) {
	$scope.onlyEmailCom = function (email) {
		return email.split('@')[1] === 'email.com';
	};
})