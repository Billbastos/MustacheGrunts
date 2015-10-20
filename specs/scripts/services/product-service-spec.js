describe("Product Service", function() {

  var service = null;

  beforeEach(function() {
    var dao = new ProductDao($);
    service = new ProductService(dao);
  });

  it("loadAll() should append the generated HTML to the element defined", function() {
    createElement("div", "mainDiv1", "");
    var mainDiv1 = document.getElementById("mainDiv1");
    var options1 = { elementId : mainDiv1.id };

    setTimeout(function() {
      expect(mainDiv1.childNodes.length > 0).toEqual(false);
      service.loadAll(options1);
      expect(mainDiv1.childNodes.length > 0).toEqual(true);

      done();
    }, 500);
  });

  it("getBySku() should append the generated HTML to the element defined", function() {
    createElement("div", "mainDiv2", "");
    var mainDiv2 = document.getElementById("mainDiv2");
    var options2 = { elementId : mainDiv2.id };

    setTimeout(function() {
      expect(mainDiv2.childNodes.length > 0).toEqual(false);
      service.getBySku(options2);
      expect(mainDiv2.childNodes.length > 0).toEqual(false);

      done();
    }, 500);
  });

});
