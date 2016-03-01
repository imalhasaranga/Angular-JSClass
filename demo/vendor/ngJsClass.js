angular.module("ngJsClass", []).factory("BaseObject", [ "$injector", function($injector) {
    var BaseObject = function(mappingfunction) {
        this.mappings = [];
        this.attr_mappings = [];
        var self = this;
        if (mappingfunction) {
            mappingfunction({
                addClassMapping: function(current_attr, class_Name) {
                    self.mappings.push({ attr_n: current_attr, class_n: class_Name });
                },
                addAttrMapping: function(current_attr , json_ob_attr) {
                    self.attr_mappings.push({ current_attr: current_attr, json_ob_attr: json_ob_attr });
                }
            });
        }
    };

    BaseObject.prototype.getClassMappingFor = function(json_ob_attr) {
        for (var y in this.mappings) {
            if (this.mappings[y].attr_n == json_ob_attr) {
                return this.mappings[y].class_n;
            }
        }
        return null;
    };
    BaseObject.prototype.getAttrMappingFor = function(json_ob_attr) {
        for (var y in this.attr_mappings) {
            if (this.attr_mappings[y].json_ob_attr == json_ob_attr) {
                return this.attr_mappings[y].current_attr;
            }
        }
        return null;
    };

    BaseObject.inherit = function(Child, mappingfunction) {
        Child.prototype = new BaseObject(mappingfunction);
        Child.prototype.constructor = Child;
    };

    BaseObject.prototype.populate = function(JSO) {
        makeob(JSO, this, $injector);
    };

    BaseObject.prototype.toJson = function() {
        return angular.toJson(this, true);
    };

    function makeob(JSO, thisx, $injector) {
        JSO = (typeof JSO == "object") ? JSO : JSON.parse(JSO);
        for (var prop in JSO) {
            var attr_name = prop;
            var maping;
            if (isArray(JSO[prop]) || isObject(JSO[prop])) {
                maping = thisx.getClassMappingFor(prop);
                attr_name = maping ? maping : attr_name;
            } else {
                maping = thisx.getAttrMappingFor(prop);
                attr_name = maping ? maping : attr_name;
            }
            thisx[prop] = resolveElement(JSO[prop], attr_name);
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
}]);
