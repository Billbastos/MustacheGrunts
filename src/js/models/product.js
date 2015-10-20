var Product = function(sku, name, shortDescription, thumbnailImage, brandThumbnailImage) {

  var _sku = sku,
      _name = name,
      _shortDescription = shortDescription,
      _thumbnailImage = thumbnailImage,
      _brandThumbnailImage = brandThumbnailImage;


  var getSku = function() { return _sku; };
  var getName = function() { return _name; };
  var getShortDescription = function() { return _shortDescription; };
  var getThumbnailImage = function() { return _thumbnailImage; };
  var getBrandThumbnailImage = function() { return _brandThumbnailImage; };


  return {
    "getSku" : getSku,
    "getName" : getName,
    "getShortDescription" : getShortDescription,
    "getThumbnailImage" : getThumbnailImage,
    "getBrandThumbnailImage" : getBrandThumbnailImage,
  };

};




















