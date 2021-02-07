

/*** Module for controller logic ***/


function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;
  

  // configUI - the initial setup for the controller
  this.configUI = async function () {
      // submit event on the form
      this.searchView.view.addEventListener('submit', this.onHandleSubmit)
  };

  //submit function for search call
  this.onHandleSubmit = async (e) =>{
    e.preventDefault();
    const tickerToSearch = e.currentTarget.stockTicker.value.trim();
 
  //validate if search is empty and output an error message 
    var tickerSearch;
    if(tickerToSearch == "") {
        tickerSearch = { error: "Please enter a stock ticker symbol."}
    } else {
      const searchParams = {
        name: tickerToSearch
      }
  
    //calling search function and pass in resultsView
     tickerSearch = await this.model.search(searchParams) 
    }

    this.resultsView.renderStockData(tickerSearch)
  } 

  this.configUI();

  return this;
}

export default SearchController;
