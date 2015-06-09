// Controller to Edit a task .

controllers.controller('EditCtrl', function ($scope, $rootScope, $http, $location, myService) {
	$scope.message= "We are going to EDIT a task.";
	$scope.getTask = function (){
		$scope.task = myService.editTask;
		console.log(myService.editTask);
	}
	$scope.getTask();
	$scope.submit = function() {
		$scope.edit()
		console.log("You are about to edit this task.", $scope.task)
		$http({
			method: 'POST',
			url: '/api/tasks',
			data: {
				due_date: $scope.task.due_date,
				description: $scope.task.description,
				title: $scope.task.title,
				priority: $scope.task.priority,
				complete: $scope.task.complete
			}
		}).
		success(function(data, status, headers, config) {
			console.log("You have edited the task.")
			return $location.path('/taskList')
			$scope.task = {};
		}).
		error(function(data, status, headers, config) {
			console.log("Something went wrong. Unable to edit task.")
		});
	}
	$scope.edit = function() {
		$http({
			method: 'DELETE',
			url: 'api/tasks/' + $scope.task._id
		}).
		success(function(data, status, headers, config) {
			console.log("You have deleted a task.")
		}).
		error(function(data, status, headers, config) {
			console.log("Something went wrong. Unable to delete task.")
		});


	}

});



/*
controllers.controller('EditCtrl', function ($scope, $rootScope, $http, myService) {
	$scope.message = "Editing a Task";
	console.log('You are inside EditCtrl now');
	$scope.task = myService.editTask;

	console.log($scope.task);

	$scope.submit = function(){

		console.log('This is before the PUT call');
		console.log($scope.task);

		$http({
			method: 'PUT',
			url: '/api/tasks',
			data: $scope.task
		}).
		success(function (data, status, headers, config) {
			console.log('You have successfully saved a task.');
			$scope.task = {};
		}).
		error(function (data, status, headers, config) {
			console.log('Oops! Something went wrong. Task did not save.');
		});
	}

});

*/
