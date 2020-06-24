const validateURL = require('../js/validateURL')

describe("checkUrl function", () => {
    test("it should return True when entered valid url", () => {
      const input =  "https://www.ctvnews.ca/politics/190-000-canadians-who-received-cerb-payments-have-had-to-repay-them-cra-says-1.4978602";
      const output = true;
      expect(validateURL(input, "url")).toEqual(output);
    });
  });

describe("checkUrl function", () => {
    test("it should return False when entered invalid url", () => {
      const input =  "good";
      const output = false;
      expect(validateURL(input, "url")).toEqual(output);
    });
  });