'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _charla = require('./../models/charla');

var _charla2 = _interopRequireDefault(_charla);

var _expositor = require('./../models/expositor');

var _expositor2 = _interopRequireDefault(_expositor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerCharla = _express2.default.Router();

routerCharla.get('/', function (req, res) {

    _charla2.default.findAll({
        include: {
            model: _expositor2.default
        }
    }).then(function (talks) {
        res.send(talks);
    }).catch(function (error) {
        res.send(error);
    });
});

routerCharla.get('/:id', function (req, res) {
    _charla2.default.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.send(error);
    });
});

routerCharla.post('/', function (req, res) {

    _charla2.default.create(req.body).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

routerCharla.put('/:id', function (req, res) {
    var updateEvent = req.body;
    updateEvent.updatedAt = Date.now();

    _charla2.default.update(updateEvent, {
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send('Error in insert new record');
    });
});

routerCharla.delete('/:id', function (req, res) {

    _charla2.default.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send();
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

exports.default = routerCharla;