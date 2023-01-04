"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var UserManager_1 = require("../Controllers/UserManager");
var ComputerMenu_1 = require("./ComputerMenu");
var UserMenu_1 = require("./UserMenu");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.userManager = new UserManager_1.UserManager();
        this.computerMenu = new ComputerMenu_1.ComputerMenu();
        this.userMenu = new UserMenu_1.UserMenu();
        this.menu = "\n    1. Dang nhap.\n    2. Tao tai khoan moi.\n    3. Thoat.\n    ";
    }
    MainMenu.prototype.selection = function () {
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
                    var username = readlineSync.question("Tai khoan: ");
                    var password = readlineSync.question("Mat khau: ");
                    var login = this.userManager.login(username, password);
                    if (login == -1) {
                        console.log("<---Sai mat khau hoac tai khoan--->");
                    }
                    else if (login == 1) {
                        // goi den userMenu
                        console.log("<--- DANG NHAP THANH CONG --->");
                        this.userMenu.selection();
                    }
                    else {
                        // Goi den computer
                        console.log("<---Day la Admin--->");
                        this.computerMenu.selected();
                    }
                    break;
                }
                case 2: {
                    this.userManager.register();
                    console.log("<--- TAO TAI KHOAN THANH CONG ^^ --->");
                    break;
                }
                case 3: {
                    return;
                }
            }
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
