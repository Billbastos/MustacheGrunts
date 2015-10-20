var ProductDao = function(ajaxUtil) {

  var emptyArray = [],
      emptyObject = {},
      requestDataUrlList = "http://www.bestbuy.ca/api/v2/json/search",
      requestDataUrlGet = "http://www.bestbuy.ca/api/v2/json/product/";

  var list = function(id,options) {
    var _options = options || emptyObject;
    ajaxUtil.ajax({
      type: 'GET',
      url: requestDataUrlList + "?categoryid="+id,
      jsonpCallback: 'prodsCallback',
      dataType: 'jsonp',
      success: function(json) {
        console.debug("[SUCCESS] request of products done.");
        var products = json.products || emptyArray;

        if (typeof _options.onSuccess === "function") {
          _options.onSuccess(products);
          console.debug("[SUCCESS] onSuccess function applied.");
        }
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  };

  var getBySku = function(sku,options) {
    var _options = options || emptyObject;
    ajaxUtil.ajax({
      type: 'GET',
      url: requestDataUrlGet + sku,
      jsonpCallback: 'prodCallback',
      dataType: 'jsonp',
      success: function(json) {
        console.debug("[SUCCESS] request of products done.");
        var products = json || emptyArray;

        if (typeof _options.onSuccess === "function") {
          _options.onSuccess(products);
          console.debug("[SUCCESS] onSuccess function applied.");
        }
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  };

  return { "list" : list, "getBySku" : getBySku };

};
