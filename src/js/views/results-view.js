
/*** Module for the views ***/

import ejs from "ejs";

/*creating template for the output result with stock ticker data:
 -- stock symbol
 -- price
 -- change
 -- change percentage
 -- date
 -- volume
*/

const stockTickerView = `
<aside class="stockData">
<div class="stockdetails"> 
<h2> <span><%= stockSymbol %></span></h2>
  <div class="stock-price">
      <span class="price" id="price"><%= stockPrice %></span>
    <div class="stock-price">
      <span class="change <%= changeClass %>" id="change"></i><%= change %></span>
      <span class="change-percentage <%= changeClass %>" id="change-percentage"><%- changePercentage %></span>
    </div>
  </div>
      <p class="bold">Date: <span class="date" id="date"><%= date %></span></p>
      <p class="bold">Volume: <span class="volume" id="volume"><%= volume %></span></p>
  </div>

</aside>
`;

// display an error message in case of empty search or invalid input 
const noResultsView = `
<aside class="alert alert-warning mt-3" role="alert">
    <p><%= error %></p>
</aside>
`;

//change colour depending on positive or negative number for change and change percentage data
function getChangeClass(change) {
  switch(Math.sign(change)) {
    case 1:
        return "positive";
    case -1:
        return "negative";
    default:
        return "neutral";
  }
}  

//rounding the number for change data to keep only two decimals
//adding '+' or '-' depending on the positive or negative change
function formatChange(change) {
  switch(Math.sign(change)) {
    case 1:
        return "+" + change.toFixed(2);
    case -1:
        return "-" + (-change).toFixed(2);
    default:
        return change.toFixed(2);
  }
}

//rounding the number for change percentage data to keep only two decimals
//remove '%' for changing and add it as an html symbol
function formatChangePercentage(changePct) {
  const change = new Number(changePct.replace("%", ""));
  switch(Math.sign(change)) {
    case 1:
        return change.toFixed(2) + "%&nbsp;&uarr;";
    case -1:
        return (-change).toFixed(2) + "%&nbsp;&darr;";
    default:
        return change.toFixed(2);
  }
}

//a function to render fetched data (using api keys)
function ResultsView(viewId) {
  this.container = document.querySelector(viewId);


  this.renderStockData = function(stockData){
        this.removeChildElements()
        //validate if stockData is not empty or if there is result
        if(stockData != null && stockData.error != null) {
          const elem = ejs.render(noResultsView, stockData)
          this.container.insertAdjacentHTML('afterbegin', elem)
         
          //display error message if there is no data
        } else if(stockData == null 
          || stockData["Global Quote"] == null 
          || Object.keys(stockData["Global Quote"]).length === 0){
          const elem = ejs.render(noResultsView, {error:"There are no results matching this search."})
          this.container.insertAdjacentHTML('afterbegin', elem)

          //in other cases display data
        } else {
          const quote = stockData["Global Quote"];
          const change = new Number(quote["09. change"]);
          const elem = ejs.render(stockTickerView, 
              {stockSymbol:quote["01. symbol"],
              stockPrice:new Number(quote["05. price"]).toFixed(2),
              change: formatChange(change),
              changePercentage: formatChangePercentage(quote["10. change percent"]),
              date:quote["07. latest trading day"],
              volume:quote["06. volume"],
              changeClass: getChangeClass(change) 
              })
          this.container.insertAdjacentHTML('afterbegin', elem)

        }
  }

  //remove previous search output
  this.removeChildElements = function(){
    this.container.querySelectorAll('aside').forEach(item=>{
      this.container.removeChild(item)
    })
  }

}

export default ResultsView;

