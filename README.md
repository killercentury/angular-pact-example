# angular-pact-example

This is an example for showing how Angular can integrate with Pact to consumer driven contracts testing.

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
