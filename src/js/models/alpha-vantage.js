/* 
swap base url: 'https://www.alphavantage.co/documentation//'

initial query people?search=luke'
*/
/* 
function SwapiModel() {
  this.apiBaseURL = "https://swapi.dev/api/";

  // the init function is called by the searchController to init the UI of the resultsView
  this.init = function () {
    const result = this.query("https://swapi.dev/api/people?search=luke");
    return result;
  };

  this.query = async function (url) {
    const req = await fetch(url);
    const res = await req.json();
    return res;
    // console.log(res);
  };

 this.search = async function (data){
   const {category, name} = {...data}
   let url = new URL(this.apiBaseURL + category + '?')
   // html encode the search params
   const params = new URLSearchParams()
   params.set('search', name)
  
   url = url+params;
  
    const req = await fetch(url)
    const res = await req.json()
   
    return res
    
 }
 

  return this;
}

export default SwapiModel;
*/
