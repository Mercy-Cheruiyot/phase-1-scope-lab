var customerName ="bob";
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
return customerName
}

//console.log(customerName);

//second question
var bestCustomer //declaring a undefined variable in global scope.
function setBestCustomer(){
   return bestCustomer="not bob"
   
}
//setBestCustomer(bestCustomer);

//question 4 where the function overwrites best customer.
function overwriteBestCustomer(){
return bestCustomer="maybe bob"

}
//overwriteBestCustomer();

//question 5 trying to reassign const variable
const leastFavoriteCustomer="poorus";
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer='sam';  
}
changeLeastFavoriteCustomer();