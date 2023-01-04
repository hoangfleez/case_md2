"use strict";
exports.__esModule = true;
exports.ComputerMenu = void 0;
var ComputerManger_1 = require("../Controllers/ComputerManger");
var readlineSync = require('readline-sync');
var ComputerMenu = /** @class */ (function () {
    function ComputerMenu() {
        this.computerManger = new ComputerManger_1.ComputerManger();
        this.menu = "\n    1. Them may.\n    2. Tim kiem may.\n    3. Hien thi cac may.\n    4. Xoa may.\n    5. Tinh tien.\n    6. Quay ve man hinh chinh.";
    }
    ComputerMenu.prototype.selected = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Hay chon so: ");
                if (choice < 1 || choice > 6) {
                    console.log("<---KHONG CO SO NAY. HAY CHON LAI--->");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1: {
                    var id = +readlineSync.question("Them id:");
                    var notExist = -1;
                    var index = this.computerManger.searchById(id);
                    if (index == notExist) {
                        this.computerManger.addComputer(id);
                        console.log("Da them ID.");
                    }
                    else {
                        console.log("ID nay da ton tai");
                    }
                    break;
                }
                case 2: {
                    var id = +readlineSync.question(" Ban can tim may bao nhieu? ");
                    var no = -1;
                    var isIdExist = this.computerManger.searchById(id);
                    if (isIdExist == no) {
                        console.log("Khong co may nay");
                        break;
                    }
                    else {
                        console.table(this.computerManger.showComputer(id));
                    }
                    break;
                }
                case 3: {
                    console.table(this.computerManger.showListComputer());
                    break;
                }
                case 4: {
                    var id = +readlineSync.question("Nhap ID ban muon xoa:");
                    var isIdExist = this.computerManger.searchById(id);
                    var no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co ID nay!!');
                        }
                        else {
                            this.computerManger.deleteComputer(id);
                            break;
                        }
                    }
                    break;
                }
                case 5: {
                    var id = +readlineSync.question("Nhap id:");
                    var isIdExist = this.computerManger.searchById(id);
                    var no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co may nay');
                        }
                        else {
                            console.log(this.computerManger.payment(id) + ' VND');
                            break;
                        }
                    }
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    };
    return ComputerMenu;
}());
exports.ComputerMenu = ComputerMenu;
