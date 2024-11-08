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

test('Validates a correct email format', () => {
  expect(validateEmail("abc.xyz@bl.co.in")).toBe(true);
});

test('Validates email without optional parts', () => {
  expect(validateEmail("abc@bl.co")).toBe(true);
});

test('Invalidates email without mandatory parts', () => {
  expect(validateEmail("abc@bl")).toBe(false);
});

test('Invalidates email with incorrect structure', () => {
  expect(validateEmail("abc@blco.in")).toBe(false);
});




