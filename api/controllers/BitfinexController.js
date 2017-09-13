/**
 * BitfinexController
 *
 * @description :: Server-side logic for managing bitfinexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    btcusdTicker: function (req, res) {

        if (!req.isSocket) {
            return res.badRequest();
        }

        return res.ok();

    }

};

