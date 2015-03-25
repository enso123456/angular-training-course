angular.module('treehouseCourse', [])
  .controller('stageOneCtrl', function ($scope) {
    $scope.user = {
      name: "Alex Vanston",
      email: "alex@mrvdot.com",
      age: 25,
      active: false,
      role: "anonymous"
    };
  });