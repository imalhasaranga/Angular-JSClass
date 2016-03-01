angular.module("demo",["ngJsClass"]).controller("democontroller", function($scope, Student, $http) {


    $http.get('content.json').success(function(response) {
        
            var jone = new Student();
            jone.populate(response);
            $scope.jone = jone;

            $scope.jonJson = jone.toJson();
       
    });


});





























