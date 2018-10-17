const Cupon = require('../models/cupon.model');

exports.cupon_create = function(req, res) {
    let cupon = new Cupon(
        {
            code: req.body.code,
            discount: req.body.discount,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            used: req.body.used,
        }
    );

    cupon.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Cupon creado')
    })
};

exports.cupon_details = function(req, res) {
    Cupon.find({ code: req.params.code }, function(err, cupon) {
        if (err) return res.status(500).send(err);
        res.send(cupon);
    });
};

exports.cupon_update = function(req, res) {
    Cupon.findOneAndUpdate( { code: req.params.code }, {$set: req.body}, function (err, cupon) {
        if (err) return next(err);
        res.send('Cupon actualizado');
    });
};

exports.cupon_delete = function (req, res) {
    Cupon.findOneAndDelete( { code: req.params.code }, function (err) {
        if (err) return next(err);
        res.send('Cupon eliminado');
    })
};