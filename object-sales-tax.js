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
  var finalOutput = {};

  for (var index in companySalesData) {
    var useSales = companySalesData[index];
    var x = useSales.sales
    // console.log("->", x)
    var currentSales = 0;
    for (var i = 0; i < x.length; i++) {
      currentSales = currentSales += x[i];
    }
    var currentTaxes = currentSales * taxRates[useSales.province]
    // console.log("-->", currentSales);
    if (finalOutput[useSales.name]) {
      finalOutput[useSales.name].totalSales += currentSales
      finalOutput[useSales.name].totalTaxes += currentTaxes
    } else {
    // if the object doesn't exist then
      finalOutput[useSales.name] = {
        totalSales: currentSales,
        totalTaxes: currentTaxes
      }
    }
  }
  // for (var indexII in salesTaxRates) {
  //   var useTaxes = salesTaxRates[indexII];
  //   console.log(useTaxes)
  // }
  return finalOutput;
}

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