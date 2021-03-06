# ngJSClass (angular-JsClass)


 Working with litaral notationed objects in angularJs is fine as long as the project is small but when the codebase is getting bigger doing that create problems, specially when you are working with a REST api. Because the Structure of an Object generated after consuming a particular REST api is not defined within the project in the above approach, so developers allways have to refer to the Documentation, also when the project getting bigger, dayanamically typed language like javascript create more problem of maintaining the codebase than any other typed language, so it is always better to work with classes ( prototype or constractor notation )
##### But!!
 This create problems like how to instantiate objects from a json, Only option is to manually create object treee because Javascript does not have something cool like Gson or Jackson type of deserializers/serializers that can create an instance out of a JSON
 
  What is ngJSClass ?
  -----------
Jsclass in an angular module which aimed to solve the above problem, it allowes you to directly populate Instanceds out of JSON vice versa,  Current version is 1.0 and this needs lot of improvements before using in production

## How to install

You may install this module using NPM, Bower Or Download build folder 

- NPM   : `npm install angular-jsclass --save`
- Bower : `bower install angular-jsclass --save`

 How to Use
 -----------
 
1. Include ngJsClass.min.js just below to angular
2. Add "ngJsClass" to your project (See below)

   ```
    ngular.module("demo",["ngJsClass"]) .....
   ```
3. Create your Classe from the json, See the following example or just paste the json [HERE](http://jsclass.imalhasaranga.com/)  to get the code generated
    * Example Json

        ```
        {
        	"name": "Jone Banda",
        	"age": 23,
        	"address": "11/1 ABC",
        	"job": "Engineer",
        	"friends": [{
        		"name": "Jonny English",
        		"age": "101",
        		"speaks": "hindi"
        	}, {
        		"name": "Deadpool",
        		"age": "103",
        		"speaks": "english"
        	}],
        	"school": {
        		"name": "Ananda Collage",
        		"n_of_students": 2000,
        		"Rank": 5
        	}
        }
        ```
       * Example Base Class
       ```
            angular.module("demo").factory("Student", ["BaseObject", function(BaseObject) {
        	var Student =  function(){
        		this.name;
        		this.age;
        		this.address;
        		this.job;
        		this.friends;
        		this.school;
        	}
        	BaseObject.inherit(Student, function(mapper) {
        		/*
        		Generator might create a class called Friends, 
        		but is bad to have a class called Friends So I want to map friends
        		attribute to Friend Class
        		*/
        		mapper.addClassMapping("friends", "Friend");
        		//mapper.addAttrMapping("name", "User_name");
        	});
        	Student.prototype.getName= function(){
        		return this.name; 
        	};
        	Student.prototype.setName= function(name){
        		this.name=name; 
        	};
            //........rest of the getters and setter .......
        	return Student;
        }]);

        /* Define all the other classes below ( if the classe names are not the one that jsone implies 
        then you need to add correct mappings to those classes, 
        see the demo code for more detail code explanation )  */
        ```
        Run the [Demo folder](https://github.com/imalhasaranga/Angular-JSClass/tree/master/demo) for more understanding

4. Populate an instance Using the Json

    ```
    angular.module("demo", ["ngJsClass"])
    .controller("democontroller", function($scope, Student, $http) {
        $http.get('content.json').success(function(response) {
            var jone = new Student();
            jone.populate(response);
            $scope.jone = jone; // Student Object is ready to use
            $scope.jonJson = jone.toJson(); / // Convert Student to a Json
        });
    });
    ```
## Contributing
**Bug fixes** and **new features** can be proposed using [pull requests](https://github.com/imalhasaranga/Angular-JSClass/pulls).
Please read the [contribution guidelines](https://github.com/imalhasaranga/Angular-JSClass/blob/master/Contribution.md) before submitting a pull request.
    
## Licensing



Released under the [MIT license](https://github.com/imalhasaranga/Angular-JSClass/blob/master/LICENSE.md)

 