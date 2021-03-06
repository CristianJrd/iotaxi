'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _myDevices = require('./myDevices');

var _myDevices2 = _interopRequireDefault(_myDevices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    allDevice: _all2.default,
    singleDevice: _single2.default,
    myDevices: _myDevices2.default
};