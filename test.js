const KrakenClient = require('kraken-api');
const keys         = require('./config/keys.js');
const kraken       = new KrakenClient(keys.apiKey, keys.apiSecret);


(async () => {
    // Display user's balance
    kraken.api('Balance')
	.then(balance => {
	    console.log('My Balance: %s', JSON.stringify(balance));
	})
    .catch(err => {
    	console.log('Balance Error Catch: ', err);
    });
 
    // Get Ticker Info
    //console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD' }));
    kraken.api('Ticker', { pair : 'XXMRZEUR' })
    .then(data => {
		console.log('Ticker Data: ', JSON.stringify(data));
    })
    .catch(err => {
    	console.log('Ticker Error Catch: ', err);
    });
})();
