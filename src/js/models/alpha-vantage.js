/* 
swap base url: 'https://www.alphavantage.co/documentation/'

initial query '
*/

//a function to connect Alpha Vantage Api
function AlphaVantageModel() {
  this.apiBaseURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=9MR2V0SL3G20PVEF&";


//function to fetch data
 this.search = async function (data){
   let url = new URL(this.apiBaseURL)
   // html encode the search params
   const params = new URLSearchParams()
   params.set('symbol', data.name)
  
   url = url+params;
  
   var res = null;
   try {
    const req = await fetch(url)
    res = await req.json()

      } catch {
   }
    return res  
 }
  return this;
}

export default AlphaVantageModel;


