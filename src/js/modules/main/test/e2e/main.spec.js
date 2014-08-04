describe("main module tests", function () {
  describe("main", function () {
    it("should display the messae set in scope", function () {
      var message = element(by.binding('messageText'));
      expect(message.getText()).toBe('Modular architecture for AngularJS apps');
    });
  });
});