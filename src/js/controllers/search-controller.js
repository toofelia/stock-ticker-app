
function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;
  //this = 'stockTicker'

  // configUI - this is the initial setup for the controller
  this.configUI = async function () {
    // submit event on the form
    this.searchView.view.addEventListener('submit', this.onHandleSubmit)
  };

  this.onCheckHandler =     (e)=>  {
    // this = e.currentTarget
     this.searchView.updateLabel(this)
  };

  this.onHandleSubmit = async (e) =>{
    e.preventDefault();
    // combine our search
    // no validation
    const searchParams = {
      name:e.currentTarget.stockTicker.value
    }
   const tickerSearch = await this.model.search(searchParams)
    this.resultsView.renderPeople(tickerSearch)
  } 

  this.configUI();

  return this;
}

export default SearchController;
