// index.js

// Declare customerName in global scope
var customerName = 'bob';

// Modify customerName to be uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Set bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Overwrite bestCustomer with a new value
function overwriteBestCustomer(newValue) {
  bestCustomer = newValue;
}

// Attempt to reassign leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

// Export variables and functions
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};
