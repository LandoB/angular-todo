controllers.controller('ListCtrl', function ($scope, $http, $route, $location, myService) {
	// write Ctrl here
	$scope.message = "Task List";
	$scope.getTasks = function(){
			console.log('$scope.task="task list"')
			$http({
				method: 'GET',
				url: '/api/tasks',
				data: $scope.tasks
			}).
			success(function (data, status, headers, config) {
				// $scope.name = data.username;
				console.log('task list has loaded successfully!')
				$scope.tasks = data
			}).
			error(function (data, status, headers, config) {
				// $scope.name = 'Error!';
				console.log('failed to load task list!');
			});
		}
		$scope.getTasks();


		$scope.delete = function(task){
			console.log('we are about to delete a task')
			$http({
				method: 'DELETE',
				url: '/api/tasks/' + task,
			}).
			success(function (data, status, headers, config) {
				console.log('you have deleted a task!', data);
				$scope.getTasks();
			}).
			error(function (data, status, headers, config) {
				console.log('task deletion failed!', data)
			})
		}

		$scope.edit = function(task){
			console.log('we are about to edit a task')
			$http({
				method: 'GET',
				url: '/api/tasks/' + task,
			}).
			success(function (data, status, headers, config) {
				console.log('you did edit a task!', data);
				myService.editTask = data[0];
				$location.path('/editTask');

			}).
			error(function (data, status, headers, config) {
				console.log('task edit failed!', data)
			})
		}

})



