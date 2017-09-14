// const pushApi = require('poloniex-api').pushApi;

// pushApi.create({ subscriptionName: 'ticker', currencyPair: 'USDT_BTC' }, (obj) => {
//     console.log(obj)
// });

const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();
 
function intervalFunct() {    
    poloniex.returnTicker((err, ticker) => {
          if (err) {
                console.log(err.message);
            } else {
                    //console.log(ticker["USDT_BTC"]);
                    sails.sockets.blast('Poloniex BTCUSD Ticker Update', ticker["USDT_BTC"]);
            }
    });
}

setInterval(intervalFunct, 
    1000
);