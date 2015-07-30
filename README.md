# angular-pact-example

This is an example for showing how Angular can integrate with Pact to consumer driven contracts testing.

The implementation of pact being used in the example is [pact-consumer-js-dsl](https://github.com/DiUS/pact-consumer-js-dsl). Please read its documents first if you are not familiar with it.

## How to

### Launch the mock server
```
bundle install
bundle exec pact-mock-service -p 1234 -l log/pact.logs --pact-dir tmp/pacts
```

### Run the test
```
grunt test:pact
```

## Note
For those of you may interest in how this example was built from beginning, here are the steps:

1. Use yeoman to generate an angular project.
2. Follow the instructions on https://github.com/DiUS/pact-consumer-js-dsl to install pact-consumer-js-dsl.
3. In the custom karma.pact.conf.js which is based on the generated karma.conf.js, make sure to remove angular-mocks to avoid the #httpBackend being switched to the mock one.
4. Create a simple test in "test/pact/service.js" with Pact and manually bootstrap the angular module instead of using the functions provided by original angular-mocks.
