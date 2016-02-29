var angularpro = angular.module("angularexp",[]);
angularpro.config(function(){

});

angularpro.run(function($rootScope,Utils){
        $rootScope.Utils = Utils;
});


angularpro.controller("documentcontroller",function($scope, DocumentFactory){
        var document = DocumentFactory;
    console.log(angular.toJson(document));
});





angularpro.directive("document",function(){
    return {
        scope :{

        },
        link : function($scope, $element, $attr){
            console.log("document");
        }
    }
});

angularpro.directive("documentPage",function(){
    return {
        scope :{

        },
        link : function($scope, $element, $attr){
            console.log("document-Page");
        }
    }
});

angularpro.directive("pageField",function(){
    return {
        scope :{

        },
        link : function($scope, $element, $attr){
            console.log("Page-field");
        }
    }
});



angularpro.controller("testcontroller",function($scope){

    var imal =  {
        name : "imal",
            age : 27,
            junda : {
                k : "v"
            }
    }

    var nimal =  {
        name : "nimal",
        age : 26,
        junda : {
            k : "d"
        }
    }

    var people = [];
    people.push(imal);
    people.push(nimal);
    var students = people;
    $scope.people = students;

    $scope.backgroundcolor = "red";
    $scope.changecolor = function(){
        $scope.backgroundcolor = "black";
    }

    $scope.useutility = function(){
        alert($scope.Utils.isBig(0,10));
    }

    $scope.changeperson = function(){
        people[0].junda.k = "pamal";
    }

});


angularpro.factory("Utils",function(){
    return {
        isBig : function(a,b){
            return a> b;
        }
    }
});


























