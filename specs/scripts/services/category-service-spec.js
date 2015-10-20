describe("Category Service", function() {

  var service = null;

  beforeEach(function() {
    var dao = new CategoryDao($);
    service = new CategoryService(dao);
  });

  it("loadAll() should append the generated HTML to the element defined", function() {
    createElement("div", "mainDiv", "");
    var mainDiv = document.getElementById("mainDiv");
    var options = { elementId : mainDiv.id };

    setTimeout(function() {
      expect(mainDiv.childNodes.length > 0).toEqual(false);
      service.loadAll(options);
      expect(mainDiv.childNodes.length > 0).toEqual(true);

      done();
    }, 1000);

  });
});
