/**
 * Created by Guilherme on 15-10-14.
 */
var Category = function(id, name, productCount) {

    var getId = function() { return id; };
    var getName = function() { return name; };
    var getProductCount = function() { return productCount; };
    var toJson = function() {
        return '{ "id":"' + getId() + '", "name":' + getName() + ', "productCount":"' + getProductCount() + '" }';
    };

    return {
        "getId": getId,
        "getName": getName,
        "getProductCount": getProductCount,
        "toJson": toJson
    };

};