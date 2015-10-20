var CategoryDao = function(ajaxUtil) {

  var emptyArray = [],
      emptyObject = {},
      requestDataUrl = "http://www.bestbuy.ca/api/v2/json/category/departments";

  var all = function(options) {
    var _options = options || emptyObject;

    ajaxUtil.ajax({
      type: 'GET',
      url: requestDataUrl,
      jsonpCallback: 'jsonCallback',
      dataType: 'jsonp',
      success: function(json) {
        console.debug("[SUCCESS] request of categories done.");
        var subCategories = json.subCategories || emptyArray;

        if (typeof _options.onSuccess === "function") {
          _options.onSuccess(subCategories);
          console.debug("[SUCCESS] onSuccess function applied.");
        }
      },
      error: function(e) {
        console.log(e.message);
      }
    });


  };

  return { "all" : all };

};
