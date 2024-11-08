import { validateFirstName, validateLastName } from './Validation.js';


test('Validates a correct first name', () => {
  expect(validateFirstName("Shreya")).toBe(true);
});

test('Invalidates a first name starting with lowercase', () => {
  expect(validateFirstName("shreya")).toBe(false);
});

test('Invalidates a first name that is too short', () => {
  expect(validateFirstName("Sh")).toBe(false);
});

test('Validates a correct last name', () => {
  expect(validateLastName("Akole")).toBe(true);
});

test('Invalidates a last name starting with lowercase', () => {
  expect(validateLastName("akole")).toBe(false);
});

test('Invalidates a last name that is too short', () => {
  expect(validateLastName("Ak")).toBe(false);
});





