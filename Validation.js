
export function validateFirstName(name) {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;
    return regex.test(name);
  }
  