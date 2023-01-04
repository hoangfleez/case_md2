"use strict";
exports.__esModule = true;
exports.ComputerManger = void 0;
var Computer_1 = require("../Model/Computer");
var ComputerManger = /** @class */ (function () {
    function ComputerManger() {
        this.computerList = [];
    }
    ComputerManger.prototype.addComputer = function (id) {
        this.computerList.push(new Computer_1.Computer(id, "On"));
    };
    ComputerManger.prototype.searchById = function (id) {
        for (var i = 0; i < this.computerList.length; i++) {
            if (this.computerList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    };
    ComputerManger.prototype.showListComputer = function () {
        return this.computerList;
    };
    ComputerManger.prototype.showComputer = function (id) {
        var index = this.searchById(id);
        return this.showListComputer()[index];
    };
    ComputerManger.prototype.deleteComputer = function (id) {
        var index = this.searchById(id);
        this.computerList.splice(index, 1);
        return;
    };
    ComputerManger.prototype.payment = function (id) {
        var thisTime = new Date();
        var index = this.searchById(id);
        var convertMilsToHours = 60 * 60 * 60;
        var timeUsed = thisTime.getTime() - this.computerList[index].getTimeOn().getTime();
        var pricePerHour = 100000;
        var payment = (timeUsed / convertMilsToHours) * pricePerHour;
        this.computerList[index].setStatus("Off");
        return payment;
    };
    return ComputerManger;
}());
exports.ComputerManger = ComputerManger;
