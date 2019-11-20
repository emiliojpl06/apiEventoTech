'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _charla = require('./charla');

var _charla2 = _interopRequireDefault(_charla);

var _expositor = require('./expositor');

var _expositor2 = _interopRequireDefault(_expositor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/charla', _charla2.default);
router.use('/expositor', _expositor2.default);

exports.default = router;