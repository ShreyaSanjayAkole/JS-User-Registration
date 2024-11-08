
export function validateFirstName(name) {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;
    return regex.test(name);
  }

export function validateLastName(name){
  const regex = /^[A-Z][a-zA-Z]{2,}$/;
  return regex.test(name);
}

export function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
  return emailPattern.test(email);
}

export function validateMobileNumber(mobile) {
  const mobilePattern = /^(\d{2})\s(\d{10})$/;
  return mobilePattern.test(mobile);
}

export function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
  return passwordPattern.test(password);
}
  