'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _speakers = require('./../models/expositor');

var _speakers2 = _interopRequireDefault(_speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerExpositor = _express2.default.Router();

routerExpositor.get('/', function (req, res) {

    _speakers2.default.findAll().then(function (speakers) {
        res.send(speakers);
    }).catch(function (error) {
        res.send(error);
    });
});

routerExpositor.get('/:id', function (req, res) {
    _speakers2.default.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.send(error);
    });
});

routerExpositor.post('/', function (req, res) {
    var newEvent = req.body;

    _speakers2.default.create(newEvent).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

routerExpositor.put('/:id', function (req, res) {
    var updateEvent = req.body;

    _speakers2.default.update(updateEvent, {
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

routerExpositor.delete('/:id', function (req, res) {

    _speakers2.default.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send();
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

exports.default = routerExpositor;