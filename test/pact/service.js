describe("Hello Service", function () {

  var helloProvider;

  beforeEach(function () {
    helloProvider = Pact.mockService({
      consumer: 'Hello Consumer',
      provider: 'Hello Provider',
      port: 1234,
      done: function (error) {
        expect(error).toBe(null);
      }
    });
  });

  it("should say hello", function (done) {
    helloProvider
      .uponReceiving("a request for hello")
      .withRequest("get", "/sayHello")
      .willRespondWith(200, {
        "Content-Type": "application/json"
      }, {
        reply: "Hello"
      });

    helloProvider.run(done, function (runComplete) {
      angular.module('hello', []).run(function ($http) {
        $http.get('http://localhost:1234/sayHello').success(function (data) {
          expect(data).toEqual({
            reply: "Hello"
          });
          runComplete();
        });
      })
      angular.bootstrap(document, ["hello"]);
    });
  });
});
