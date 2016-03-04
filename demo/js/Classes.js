/*************Student**************/
angular.module("demo").factory("Student", ["BaseObject", function(BaseObject) {
    var Student =  function(){
        this.name;
        this.age;
        this.address;
        this.job;
        this.friends;
        this.school;
        this.hobbies;
        this.loves;
    }
    BaseObject.inherit(Student, function(mapper) {
        /* Use mapper object to register your mappings */
        mapper.addClassMapping("friends", "Friend");
        mapper.addClassMapping("loves", "Lover");
        //mapper.addAttrMapping("name_one", "name");
    });
    Student.prototype.getName= function(){
        return this.name; 
    };
    Student.prototype.setName= function(name){
        this.name=name; 
    };
    Student.prototype.getAge= function(){
        return this.age; 
    };
    Student.prototype.setAge= function(age){
        this.age=age; 
    };
    Student.prototype.getAddress= function(){
        return this.address; 
    };
    Student.prototype.setAddress= function(address){
        this.address=address; 
    };
    Student.prototype.getJob= function(){
        return this.job; 
    };
    Student.prototype.setJob= function(job){
        this.job=job; 
    };
    Student.prototype.getFriends= function(){
        return this.friends; 
    };
    Student.prototype.setFriends= function(friends){
        this.friends=friends; 
    };
    Student.prototype.getSchool= function(){
        return this.school; 
    };
    Student.prototype.setSchool= function(school){
        this.school=school; 
    };
    Student.prototype.getHobbies= function(){
        return this.hobbies; 
    };
    Student.prototype.setHobbies= function(hobbies){
        this.hobbies=hobbies; 
    };
    Student.prototype.getLoves= function(){
        return this.loves; 
    };
    Student.prototype.setLoves= function(loves){
        this.loves=loves; 
    };
    return Student;
}]);

/*************Loves**************/
angular.module("demo").factory("Lover", ["BaseObject", function(BaseObject) {
    var Lover =  function(){
        this.name;
        this.age;
        this.loves;
    }
    BaseObject.inherit(Lover, function(mapper) {
        mapper.addClassMapping("loves", "Lover");
    });
    Lover.prototype.getName= function(){
        return this.name; 
    };
    Lover.prototype.setName= function(name){
        this.name=name; 
    };
    Lover.prototype.getAge= function(){
        return this.age; 
    };
    Lover.prototype.setAge= function(age){
        this.age=age; 
    };
    Lover.prototype.getLoves= function(){
        return this.loves; 
    };
    Lover.prototype.setLoves= function(loves){
        this.loves=loves; 
    };
    return Lover;
}]);

/*************School**************/
angular.module("demo").factory("School", ["BaseObject", function(BaseObject) {
    var School =  function(){
        this.name;
        this.n_of_students;
        this.Rank;
        this.IsPosh;
    }
    BaseObject.inherit(School, function(mapper) {
        /* Use mapper object to register your mappings */
        //mapper.addClassMapping("friend", "Friend");
        //mapper.addAttrMapping("name_one", "name");
    });
    School.prototype.getName= function(){
        return this.name; 
    };
    School.prototype.setName= function(name){
        this.name=name; 
    };
    School.prototype.getN_of_students= function(){
        return this.n_of_students; 
    };
    School.prototype.setN_of_students= function(n_of_students){
        this.n_of_students=n_of_students; 
    };
    School.prototype.getRank= function(){
        return this.Rank; 
    };
    School.prototype.setRank= function(Rank){
        this.Rank=Rank; 
    };
    School.prototype.getIsPosh= function(){
        return this.IsPosh; 
    };
    School.prototype.setIsPosh= function(IsPosh){
        this.IsPosh=IsPosh; 
    };
    return School;
}]);

/*************Friends**************/
angular.module("demo").factory("Friend", ["BaseObject", function(BaseObject) {
    var Friend =  function(){
        this.name;
        this.age;
        this.Address;
        this.speaks;
    }
    BaseObject.inherit(Friend, function(mapper) {
        /* Use mapper object to register your mappings */
        //mapper.addClassMapping("friend", "Friend");
        //mapper.addAttrMapping("name_one", "name");
    });
    Friend.prototype.getName= function(){
        return this.name; 
    };
    Friend.prototype.setName= function(name){
        this.name=name; 
    };
    Friend.prototype.getAge= function(){
        return this.age; 
    };
    Friend.prototype.setAge= function(age){
        this.age=age; 
    };
    Friend.prototype.getAddress= function(){
        return this.Address; 
    };
    Friend.prototype.setAddress= function(Address){
        this.Address=Address; 
    };
    Friend.prototype.getSpeaks= function(){
        return this.speaks; 
    };
    Friend.prototype.setSpeaks= function(speaks){
        this.speaks=speaks; 
    };
    return Friend;
}]);