"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var DeviceSchema = new Schema({
    "sigfox": {
        type: String,
        required: true,
        unique: true
    },
    "concesion": {
        type: String,
        required: true,
        unique: true
    },
    "name": {
        type: String,
        required: true
    },
    "marcaVehicle": {
        type: String
    },
    "modeloVehicle": {
        type: String
    },
    "placaVehicle": {
        type: String
    },
    "image_url_fvehicle": {
        type: String
    },
    "image_url_lvehicle": {
        type: String
    },
    "image_url_rvehicle": {
        type: String
    },
    "image_url_bvehicle": {
        type: String
    },
    "image_url_conductor": {
        type: String
    },
    "conductorFullName": {
        type: String
    },
    "conductorAddress": {
        type: String
    },
    "conductorDistrict": {
        type: String
    },
    "conductorNumExt": {
        type: String
    },
    "conductorNumInt": {
        type: String
    },
    "conductorTel": {
        type: String
    },
    "lastLocation": {
        type: String
    },
    "contTravel": {
        type: Number,
        default: 0
    },
    "contTime": {
        type: Number,
        default: 0
    },
    "contKm": {
        type: Number,
        default: 0
    },
    "contEfectivo": {
        type: Number,
        default: 0
    },
    "create_at": {
        type: Date,
        default: new Date()
    },
    "update_at": {
        type: Date,
        default: new Date()
    }
}, { collection: "Devices", timestamps: true });

exports.default = _mongoose2.default.model('Devices', DeviceSchema);