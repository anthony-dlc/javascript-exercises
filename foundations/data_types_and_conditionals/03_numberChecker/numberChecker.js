function numberChecker(number) {
  let test = number % 2;
  if (test === 0 && number !== 6) {
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
