/* 
swap base url: 'https://www.alphavantage.co/documentation/'

initial query '
*/

function AlphaVantageModel() {
  this.apiBaseURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=9MR2V0SL3G20PVEF&";

  this.query = async function (url) {
    const req = await fetch(url);
    const res = await req.json();
    return res;
    // console.log(res);
  };

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


