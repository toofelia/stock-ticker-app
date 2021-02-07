

# STOCK TICKER APP INSTRUCTIONS 

### Description
The Stock Ticker App contains a functionality to fetch data from Alpha Vantage Rest APi and display an up-to-date stock market data for a certain ticker symbol. Specifically it displays the following information:
 -- stock symbol
 -- price
 -- change
 -- change percentage
 -- date
 -- volume

Validation includes: 
-- search input is not empty
-- there is a matchig result

A link to a working live demo: https://unruffled-leakey-607274.netlify.app/

### Package.json
There are a few dependencies that are installed to make this app works:
--"ejs": "^3.1.5"
--"parcel-bundler": "^1.12.4"
-- "@babel/plugin-transform-runtime": "^7.12.10",

### Install Node Modules
commands to install npm parcel bundler:
  -- npm install -D parcel bundler
   --npm run dev
   --npm run build

### Files and Folders
src is a main folder and contains:
--css folder
      - styles.css
-- js folder
      - controllers folder
           - search-controller.js
      - models folder
           - alpha-vantage.js
      - views
           - results-view.js
           - search-view.js

### CSS Styling
For a styling I used a mix of css with Bootstrap:
 -- Boostrap is used for search form
 -- CSS is used for a results view


### API
__alpha vantage api__ 
https://www.alphavantage.co/documentation/

A link to the used API keys:
https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo

To use API, request your personal API here(https://www.alphavantage.co/support/#api-key) and replace it with "apikey=demo" in the end of the link:
https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=9MR2V0SL3G20PVEF&"


__.Babelrc__  
Because we are using the parcel bundler we need to tell the bundler how to handle and convert async functions to older forms of JavaScript. You will find a babelrc file in the project root. The file contains a plugin called _@babel/plugin-transform-runtime_ this does the conversion for us.
    

   


