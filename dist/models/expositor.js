'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expositorModel = _connection2.default.define('expositor', {
    id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    correo: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    cuenta_github: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    }
});

exports.default = expositorModel;