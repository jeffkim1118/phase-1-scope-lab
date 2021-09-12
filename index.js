var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob"; 
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Tim'
}