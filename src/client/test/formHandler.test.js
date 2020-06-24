const handleSubmit = require('../js/formHandler')


describe("check if handleSubmit function exists", () => {
    test("it should pass the test if handleSubmit exists", () => {
        expect(handleSubmit).toBeDefined();
    });
  });