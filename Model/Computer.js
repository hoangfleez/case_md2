"use strict";
exports.__esModule = true;
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer(id, status) {
        this._id = id;
        this._status = status;
        this._timeOn = new Date();
    }
    Computer.prototype.getTimeOn = function () {
        return this._timeOn;
    };
    Computer.prototype.getId = function () {
        return this._id;
    };
    Computer.prototype.setId = function (value) {
        this._id = value;
    };
    Computer.prototype.getStatus = function () {
        return this._status;
    };
    Computer.prototype.setStatus = function (value) {
        this._status = value;
    };
    return Computer;
}());
exports.Computer = Computer;
