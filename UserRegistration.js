
function validateFirstName(firstName) {
  const regex = /^[A-Z][a-zA-Z]{2,}$/;
  return regex.test(firstName);
}

const firstName = prompt("Enter your first name:");
if (validateFirstName(firstName)) {
  console.log("Valid first name.");
} else {
  console.log("Invalid first name. It must start with a capital letter and be at least 3 characters long.");
}

window.validateFirstName = validateFirstName;