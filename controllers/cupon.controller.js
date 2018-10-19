const Cupon = require('../models/cupon.model');

exports.cupon_details = function(req, res, next) {
    Cupon.findOne({ code: req.params.code }, function(err, cupon) {
        if (err) next(err);
        if (!cupon) {
            res.status(404).send('No se encontró el cupon');
        } else {
            res.send(cupon);
        }
    });
};

exports.cupon_update = function(req, res, next) {
    Cupon.findOneAndUpdate( { code: req.params.code }, {$set: req.body}, function (err, cupon) {
        if (err) return res.status(500).send('Error de servidor');
        if (!cupon) {
            res.status(404).send('No se encontró el cupon');
        } else {
            res.send('Cupon actualizado');
        }
    });
};