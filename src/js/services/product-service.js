var ProductService = function(productDao, id) {

  var templatelist = function() {
    return  "<div class='col-xs-6 col-md-3' id='{{ getSku }}' onclick='loadDetail(\"{{ getSku }}\")'>" +
            "<a href='#' class='thumbnail'>" +
            "<img src='http://www.bestbuy.ca/{{ getThumbnailImage }}' alt='{{ getName }}'>" +
            "</a>" +
            "</div>";
  };

  var templateDetail = function() {
    return  "<div class='row'>"+
              "<div class='col-md-6'>" +
                "<img src='http://www.bestbuy.ca/{{ getThumbnailImage }}' alt='{{ getTitle }}'>"+
              "</div>" +
              "<div class='col-md-6'>" +
                "<h3>{{ getName }}</h3>" +
              "</div>" +
            "</div>" +
            "<p>{{ getShortDescription }}</p>";

  };

  var parseData = function(data) {
    return new Product(data.sku, data.name, data.shortDescription, data.thumbnailImage, data.brandThumbnailImage);
  };

  var loadAll = function(options) {
    var _options = options || {};

    productDao.list(id,{
      onSuccess: function(objects) {

        var html = objects.map(function(object) {
          var product = parseData(object);
          return Mustache.to_html(templatelist(), product);
        });

        var element = document.getElementById(_options.elementId);
        element.innerHTML = html.join("");
      }
    });
  };

  var getBySku = function(options) {
    var _options = options || {};

    productDao.getBySku(id,{
      onSuccess: function(object) {

        var html = function() {

          var imagepop = object.thumbnailImage;
          imagepop = imagepop.substring(imagepop.lastIndexOf("x55/")+4,imagepop.length);
          object.thumbnailImage = "multimedia/Products/250x250/"+imagepop;

          var product = parseData(object);

          return Mustache.to_html(templateDetail(), product);
        };

        var element = document.getElementById(_options.elementId);
        element.innerHTML = html();
      }
    });
  };

  return { "loadAll" : loadAll, "getBySku" : getBySku};

};
