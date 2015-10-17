/**
 * Created by Guilherme on 15-10-14.
 */
var Product = function(name, price, picture) {

    var getName = function() { return name; };
    var getPrice = function() { return price; };
    var getPicture = function() { return picture; };
    var toJson = function() {
        return '{ "name":"' + getName() + '", "price":' + getPrice() + ', "picture":"' + getPicture() + '" }';
    };

    return {
        "getName": getName,
        "getPrice": getPrice,
        "getPicture": getPicture,
        "toJson": toJson
    };

};