const validateFirstName = require('./UserRegistration');

describe('First Name Validation', () => {

    test('Valid first name with minimum 3 characters and starting with a capital', () => {
        expect(validateFirstName("Shreya")).toBe(true);
      });
      
      test('Invalid first name with less than 3 characters', () => {
        expect(validateFirstName("Sh")).toBe(false);
      });
      
      test('Invalid first name starting with a lowercase letter', () => {
        expect(validateFirstName("shreya")).toBe(false);
      });
      
      test('Invalid first name with numbers', () => {
        expect(validateFirstName("Shreya123")).toBe(false);
      });
})


