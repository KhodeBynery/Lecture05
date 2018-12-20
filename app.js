(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name= "Khode";
  $scope.sayHello=function(){
    return "Hello Coursera"
  }

});
// sharing data between view model and view

})();
