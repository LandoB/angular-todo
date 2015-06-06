controllers.controller('ListCtrl', function ($scope) {
  // write Ctrl here
  $scope.message = "Task List";
  $scope.tasks = [
    {title: "item1", description: "this is item1", due_date: "10/10/2015", priority: 1, completed: false},
    {title: "item2", description: "this is item2", due_date: "10/10/2015", priority: 2, completed: false},
    {title: "item3", description: "this is item3", due_date: "10/10/2015", priority: 3, completed: false},
  ];

})
