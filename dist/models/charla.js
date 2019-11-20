'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _expositor = require('./expositor');

var _expositor2 = _interopRequireDefault(_expositor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var charlaModel = _connection2.default.define('charlas', {
    id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    expositor_id: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    },
    hora: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    createdAt: {
        type: _sequelize2.default.DATE
    },
    updatedAt: {
        type: _sequelize2.default.DATE
    }
});

charlaModel.belongsTo(_expositor2.default);

exports.default = charlaModel;