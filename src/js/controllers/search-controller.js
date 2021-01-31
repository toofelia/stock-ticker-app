

/* 

/* function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;
  this.category = 'people'

  // configUI - this is the initial setup for the controller
  this.configUI = async function () {
    // submit event on the form
    this.searchView.view.addEventListener('submit', this.onHandleSubmit)
     //setup radio button listeners
     const data = await model.init();
     // pass the data down to the view
     this.resultsView.configUI(data.results[0]);
     // category filter
     const radios = this.searchView.view.querySelectorAll("input[type=radio]");
     radios.forEach((radio) => {
       radio.addEventListener("change", this.onCheckHandler);
     });
  };

  this.onCheckHandler =     (e)=>  {
     this.category = e.currentTarget.value
     this.searchView.updateLabel(this.category)
  };

  this.onHandleSubmit = async (e) =>{
    e.preventDefault();
    // combine our search
    // no validation
    const searchParams = {
      category:this.category,
      name:e.currentTarget.searchTerm.value
    }
   const peopleSearch = await this.model.search(searchParams)
    this.resultsView.renderPeople(peopleSearch)

  } 

  this.configUI();

  return this;
}

export default SearchController; */
