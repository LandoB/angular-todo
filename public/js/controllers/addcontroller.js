controllers.controller('AddCtrl', function ($scope, $http, $location, $rootScope) {
		$scope.message = "Add Task"

		$scope.submit = function(){
			console.log('you clicked the submit button')
			$http({
				method: 'POST',
				url: '/api/tasks',
				data: $scope.task
			}).
			success(function (data, status, headers, config) {
				console.log('you have added a new task!', data);
				$rootScope.rootuser = data.username;
				$location.path('/taskList')
			}).
			error(function (data, status, headers, config) {
				console.log('add failed!', data)
			})
		}


	});
