describe("Category DAO", function() {
  var dao = null;

  beforeEach(function() {
    dao = new CategoryDao($);
  });

  it("all() should call the callback after the data was loaded", function() {
    var callbackCalled = false;
    var options = {
      onSuccess: function () {
        callbackCalled = true;
      }
    };

    setTimeout(function () {
      expect(callbackCalled).toEqual(false);
      dao.all(options);
      expect(callbackCalled).toEqual(true);
      done();
    }, 500);

  });

});
