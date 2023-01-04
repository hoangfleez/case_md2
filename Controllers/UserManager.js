"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var User_1 = require("../Model/User");
var readlineSync = require('readline-sync');
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.userList = [];
        this.userList.push(new User_1.User("admin", "admin", 0));
    }
    UserManager.prototype.register = function () {
        var flag = true;
        var newUserName;
        var newPassWord;
        while (flag) {
            console.log("Ten tai khoan phai co it nhat 2 ky tu.");
            newUserName = readlineSync.question("Nhap ten tai khoan: ");
            if (!this.validateName(newUserName)) {
                console.log("---SAI DINH DANG HAY NHAP LAI---");
            }
            else {
                flag = false;
            }
        }
        while (!flag) {
            console.log("Mat khau phai co it nhat 6 ky tu va chua cac ky tu [#?!@$%^&*-].");
            newPassWord = readlineSync.question("Nhap mat khau:");
            if (!this.validatePassword(newPassWord)) {
                console.log("---SAI DINH DANG HAY NHAP LAI---");
            }
            else {
                flag = true;
            }
        }
        this.userList.push(new User_1.User(newUserName, newPassWord, 1));
    };
    UserManager.prototype.login = function (username, password) {
        var index = -1;
        this.userList.map(function (user) {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        });
        return index;
    };
    UserManager.prototype.validateName = function (name) {
        var regex = /^[a-z0-9]{2,}$/;
        return regex.test(name);
    };
    UserManager.prototype.validatePassword = function (password) {
        var regex1 = /^(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        return regex1.test(password);
    };
    return UserManager;
}());
exports.UserManager = UserManager;
