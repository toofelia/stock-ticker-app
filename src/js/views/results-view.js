import ejs from "ejs";

const stockTickerView = `
<aside class="stockData">
<header><h3 class="stockTicker"> <%= stockSymbol %></h3></header>

<ul class="stockdetails"> 
    <li> stock-symbol: <span><%= stockSymbol %></span></li>
    <li> stock-price: <span><%= stockPrice %> $ </span></li> 
    <li> date: <span><%= date %> $ </span></li>
    <li> change: <span><%= change %> $ </span></li>
    <li> change percentage: <span><%= changePercentage %> </span></li>
    <li> volume: <span><%= volume %></span></li>
</ul>

</aside>
`;


const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

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
            const elem = ejs.render(stockTickerView, 
              {stockSymbol:quote["01. symbol"],
              stockPrice:quote["05. price"],
              date:quote["07. latest trading day"],
              change:quote["09. change"],
              changePercentage:quote["10. change percent"],
              volume:quote["06. volume"],
              }
              )
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

