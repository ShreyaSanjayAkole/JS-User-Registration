import { validateFirstName, validateLastName, validateEmail,validateMobileNumber, validatePassword} from './Validation.js';


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

test('Validates a correct mobile number format', () => {
  expect(validateMobileNumber("91 9919819801")).toBe(true);
});

test('Invalidates a mobile number without space', () => {
  expect(validateMobileNumber("919919819801")).toBe(false);
});

test('Invalidates a mobile number with incorrect country code', () => {
  expect(validateMobileNumber("9 9919819801")).toBe(false);
});

test('Invalidates a mobile number with less than 10 digits', () => {
  expect(validateMobileNumber("91 99198198")).toBe(false);
});

test('Validates password with minimum 8 characters, one uppercase letter, one numeric digit, and exactly one special character', () => {
  expect(validatePassword("Password1!")).toBe(true);
});

test('Invalidates password without uppercase letter', () => {
  expect(validatePassword("password1!")).toBe(false);
});

test('Invalidates password without numeric digit', () => {
  expect(validatePassword("Password!")).toBe(false);
});

test('Invalidates password with less than 8 characters even if it has an uppercase letter, numeric digit, and special character', () => {
  expect(validatePassword("Pass1!")).toBe(false);
});

test('Invalidates password with more than one special character', () => {
  expect(validatePassword("Password1!!")).toBe(false);
});

test('Invalidates password without special character', () => {
  expect(validatePassword("Password123")).toBe(false);
});


