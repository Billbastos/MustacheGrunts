var AjaxUtil = (function() {

  var get = function(source, success) {
    window.success = success;

    var script = document.createElement("script");
    script.src = source + "?callback=success";
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return { "get" : get };

}());









