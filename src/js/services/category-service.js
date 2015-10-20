var CategoryService = function(categoryDao) {

  var template = function() {
    return "<button type='button' id='{{ getId }}' class='list-group-item' onclick='loadProducts(\"{{ getId }}\")'>{{ getName }}</button>";
  };

  var parseData = function(data) {
    return new Category(data.id, data.name, data.productCount);
  };

  var loadAll = function(options) {
    var _options = options || {};

    categoryDao.all({
      onSuccess: function(objects) {
        console.log(objects);
        var html = objects.map(function(object) {
          var category = parseData(object);
          return Mustache.to_html(template(), category);
        });

        var element = document.getElementById(_options.elementId);
        element.innerHTML = html.join("");
      }
    });
  };

  return { "loadAll" : loadAll };

};
