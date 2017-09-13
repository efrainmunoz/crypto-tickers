console.log('starting..');

io.socket.on('connect', function () {
    io.socket.get('/bitfinex/btcusdTicker', function (data) {
        
    });
});

io.socket.on('Bitfinex BTCUSD Ticker Update', function (updateData) {
    console.log(updateData);
    $('#bitfinex-last-price').text(updateData.LAST_PRICE);
    $('#bitfinex-bid').text(updateData.BID);
    $('#bitfinex-ask').text(updateData.ASK);
});