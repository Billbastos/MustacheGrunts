var Category = function(id, name, productCount) {

  var _id = id,
      _name = name,
      _productCount = productCount;

  var getId = function() { return _id; };
  var getName = function() { return _name; };
  var getProductCount = function() { return _productCount; };

  return {
    "getId" : getId,
    "getName" : getName,
    "getProductCount" : getProductCount,
  };

};




















