import { validateFirstName, validateLastName } from './Validation.js';

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

window.validateFirstName = validateFirstName;
window.validateLastName = validateLastName;