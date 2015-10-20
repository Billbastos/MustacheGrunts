describe("Product DAO", function() {

  var dao = null;

  beforeEach(function() {
    dao = new ProductDao($);
  });

  it("getBySku() should call the callback after the data was loaded", function() {
    var callbackCalled = false;
    var options = { onSuccess : function() { callbackCalled = true; } };

    setTimeout(function() {
      expect(callbackCalled).toEqual(false);
      dao.getBySku("10105612",options);
      expect(callbackCalled).toEqual(true);

      done();
    }, 1000);
  });

  it("list() should call the callback after the data was loaded", function() {
    var callbackCalled = false;
    var options = { onSuccess : function() { callbackCalled = true; } };

    setTimeout(function() {
      expect(callbackCalled).toEqual(false);
      dao.list("659699",options);
      expect(callbackCalled).toEqual(true);

      done();
    }, 1000);
  });

});
