/* 
    MVC structure

    Model: 
        - Alpha Vantage Api
    Controller (SearchView, ResultsView, Model)
    Views:
        - Search
        - Results
*/

import SearchController from "./controllers/search-controller.js";
import AlphaVantageModel from "./models/alpha-vantage.js";
import SearchView from "./views/search-view.js";
import ResultsView from "./views/results-view.js";

const model = new AlphaVantageModel();
const searchView = new SearchView("#search");
const resultsView = new ResultsView("#results");
const searchController = new SearchController(model, searchView, resultsView);
