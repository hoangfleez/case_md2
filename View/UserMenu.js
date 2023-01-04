"use strict";
exports.__esModule = true;
exports.UserMenu = void 0;
var readlineSync = require('readline-sync');
var UserMenu = /** @class */ (function () {
    function UserMenu() {
        this.menu = "\n    1. Dich vu.\n    2. Goi nhan vien.\n    3. Quy ve man hinh chinh.";
    }
    UserMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question(" Hay chon so: ");
                if (choice < 1 || choice > 3) {
                    console.log("<---KHONG CO SO NAY. BAN HAY CHON LAI DI!!--->");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    break;
                }
                case 2: {
                    break;
                }
                case 3: {
                    return;
                }
            }
        }
    };
    return UserMenu;
}());
exports.UserMenu = UserMenu;
