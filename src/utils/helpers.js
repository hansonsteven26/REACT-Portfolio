export function validateEmail(email) {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(String(email).toLowerCase());
}
