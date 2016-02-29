angularpro.controller("factorycontroller", function($scope, Student, $http) {


    $http.get('content.json').success(function(response) {
        var startime = new Date().getTime();
        var st = new Student();
        st.populate(response);
        $scope.stobject = st;
        var endtime = new Date().getTime();
        console.log(JSON.parse(st));
    });


});


angularpro.factory("BaseObject", function($injector) {
    var BaseObject = function(mappingfunction) {
        this.mappings = [];
        this.attr_mappings = [];
        var self = this;
        mappingfunction && mappingfunction({
            addClassMapping: function(class_Name, current_attr) {
                self.mappings.push({ attr_n: current_attr, class_n: class_Name });
            },
            addAttrMapping: function(json_ob_attr, current_attr) {
                self.attr_mappings.push({ current_attr: current_attr, json_ob_attr: json_ob_attr });
            }
        });
    }

    BaseObject.prototype.getClassMappingFor = function(json_ob_attr) {
        for (var y in this.mappings) {
            if (this.mappings[y].attr_n == json_ob_attr) {
                return this.mappings[y].class_n;
            }
        }
        return null;
    }
    BaseObject.prototype.getAttrMappingFor = function(json_ob_attr) {
        for (var y in this.attr_mappings) {
            if (this.attr_mappings[y].json_ob_attr == json_ob_attr) {
                return this.attr_mappings[y].current_attr;
            }
        }
        return null;
    }

    BaseObject.inherit = function(Child, Parent, mappingfunction) {
        Child.prototype = new BaseObject(mappingfunction);
        Child.prototype.constructor = Child;
    }

    BaseObject.prototype.populate = function(JSO) {
        makeob(JSO, this, $injector);
    }

    function makeob(JSO, thisx, $injector) {
        JSO = (typeof JSO == "object") ? JSO : JSON.parse(JSO);
        for (var prop in JSO) {
            var attr_name = prop;
            if (isArray(JSO[prop]) || isObject(JSO[prop])) {
                var maping = thisx.getClassMappingFor(prop);
                attr_name = maping ? maping : attr_name;
            } else {
                var maping = thisx.getAttrMappingFor(prop);
                attr_name = maping ? maping : attr_name;
            }
            thisx[attr_name] = resolveElement(JSO[prop], prop);
        }

        function capitalizeFirstLetter(string) {
            return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
        }

        function makeInstance(prop, obj) {
            var classx = $injector.get(capitalizeFirstLetter(prop));
            var intance_ob = new classx();
            intance_ob.populate(obj);
            return intance_ob;
        }


        function resolveElement(obj, prop) {
            if (isArray(obj)) {
                var objectar = [];
                for (var y in obj) {
                    objectar.push(resolveElement(obj[y], prop));
                }
                return objectar;
            } else if (isObject(obj)) {
                return makeInstance(prop, obj);
            } else {
                return obj;
            }
        }

        function isArray(object) {
            return Object.prototype.toString.call(object) === '[object Array]';
        }

        function isObject(object) {
            return (typeof object == "object");
        }

    }

    return BaseObject;
});


angularpro.factory("Student", ["BaseObject", function(BaseObject) {
    /*-------------------------------------------------------*/
    var Base = function() {
        this.name;
        this.friend;
        this.Arr;
        this.teachers;
    }
    BaseObject.inherit(Base, BaseObject, function(mapper) {
        mapper.addClassMapping("friend", "Friend");
        mapper.addAttrMapping("name_one", "name");
    });


    Base.prototype.getName = function() {
        return this.name;
    };
    Base.prototype.setName = function(name) {
        this.name = name;
    };
    Base.prototype.getFriend = function() {
        return this.friend;
    };
    Base.prototype.setFriend = function(friend) {
        this.friend = friend;
    };
    Base.prototype.getArr = function() {
        return this.Arr;
    };
    Base.prototype.setArr = function(Arr) {
        this.Arr = Arr;
    };
    Base.prototype.getTeachers = function() {
        return this.teachers;
    };
    Base.prototype.setTeachers = function(teachers) {
        this.teachers = teachers;
    };

    return Base;

}]);


angularpro.factory("Teachers", function(BaseObject) {
    var teachers = function() {
        this.name;
    }
    teachers.prototype = Object.create(BaseObject.prototype);
    teachers.prototype.constructor = teachers;

    teachers.prototype.getName = function() {
        return this.name;
    };
    teachers.prototype.setName = function(name) {
        this.name = name;
    };



    return teachers;
});

angularpro.factory("Friend", function(BaseObject) {

    var friend = function() {
        this.name;
        this.friend;
    }
    friend.prototype = Object.create(BaseObject.prototype);
    friend.prototype.constructor = friend;

    friend.prototype.getName = function() {
        return this.name;
    };
    friend.prototype.setName = function(name) {
        this.name = name;
    };
    friend.prototype.getFriend = function() {
        return this.friend;
    };
    friend.prototype.setFriend = function(friend) {
        this.friend = friend;
    };



    return friend;
});
angularpro.factory("Arr", function(BaseObject) {

    var Arr = function() {
        this.age;
        this.Arr;
    }
    Arr.prototype = Object.create(BaseObject.prototype);
    Arr.prototype.constructor = Arr;

    Arr.prototype.getAge = function() {
        return this.age;
    };
    Arr.prototype.setAge = function(age) {
        this.age = age;
    };
    Arr.prototype.getArr = function() {
        return this.Arr;
    };
    Arr.prototype.setArr = function(Arr) {
        this.Arr = Arr;
    };



    return Arr;
});
