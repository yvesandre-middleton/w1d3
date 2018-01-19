var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  // set an empty object to fill
  var finalOutput = {};
  // run a loop finding the position in companySalesData
  for (var index in companySalesData) {
    // set a variable useSales to acces what loop runs through
    var useSales = companySalesData[index];
    // set a variable to hold the objects sales values
    var x = useSales.sales
    // console.log("->", x)
    // set current sales value to 0
    var currentSales = 0;
    //run a loop adding each sale to the current sale giving us total sales amounts
    for (var i = 0; i < x.length; i++) {
      currentSales = currentSales += x[i];
    }
    // set a new variable to current taxes which calculates our current sales depending on province
    var currentTaxes = currentSales * taxRates[useSales.province]
    // console.log("-->", currentSales);
    // if the object exists already then add the sales and taxes again to existing values
    //this is to get both telus objects totals into one
    if (finalOutput[useSales.name]) {
      finalOutput[useSales.name].totalSales += currentSales
      finalOutput[useSales.name].totalTaxes += currentTaxes
    } else {
    // if the object doesn't exist then add the values we got to each value
      finalOutput[useSales.name] = {
        totalSales: currentSales,
        totalTaxes: currentTaxes
      }
    }
  }
  // return our oject with all the new values added
  return finalOutput;
}
// log the variable results which is equal to our function with the parameters from
// the object passed in
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/