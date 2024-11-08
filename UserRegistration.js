import { validateEmail, validateFirstName, validateLastName, validateMobileNumber, validatePassword } from './Validation.js';

const firstName = prompt("Enter your first name:");
if (validateFirstName(firstName)) {
  console.log("Valid first name.");
} else {
  console.log("Invalid first name. It must start with a capital letter and be at least 3 characters long.");
}

const lastname = prompt("Enter your last name:");
if (validateLastName(lastname)){
  console.log("valid last name");
}else{
  console.log("Invalid last name. It must start with a capital letter and be at least 3 characters long.");
}

const email = prompt("Enter your email id: ");
if(validateEmail(email)){
  console.log("valid email id");
}else{
  console.log("Invalid email id.");
}

const phone = prompt("Enter phone number(Mobile Format - E.g. 91 9919819801): ");
if(validateMobileNumber(phone)){
  console.log("valid phone number");
}else{
  console.log("Invalid phone number.");
}

const password = prompt("Enter Password");
if(validatePassword(password)){
  console.log("Valid Password");
}else{
  console.log("Invalidates password with less than 8 characters");
}

window.validateFirstName = validateFirstName;
window.validateLastName = validateLastName;
window.validateEmail = validateEmail;
window.validateMobileNumber = validateMobileNumber;
window.validatePassword = validatePassword;