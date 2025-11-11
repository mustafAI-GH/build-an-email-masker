function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let userName = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  let firstChar = userName[0];
  let lastChar = userName[userName.length - 1];
  let middleMask = '*'.repeat(userName.length - 2);
  let maskedUsername = firstChar + middleMask + lastChar;
  
  return maskedUsername + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email)); 
