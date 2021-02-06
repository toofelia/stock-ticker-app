import ejs from "ejs";

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


const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

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

function ResultsView(viewId) {
  this.container = document.querySelector(viewId);

  this.renderPeople = function(people){
        this.removeChildElements()
        if(people == null 
          || people["Global Quote"] == null 
          || Object.keys(people["Global Quote"]).length === 0){
          const elem = ejs.render(noResultsView)
          this.container.insertAdjacentHTML('afterbegin', elem)
        } else {
          const quote = people["Global Quote"];
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

  this.removeChildElements = function(){
    this.container.querySelectorAll('aside').forEach(item=>{
      this.container.removeChild(item)
    })
  }

}

export default ResultsView;

