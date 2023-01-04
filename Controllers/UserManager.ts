import {User} from "../Model/User";

const readlineSync = require('readline-sync');

export class UserManager {
    private userList: User[] = [];

    register() {
        let flag = true;
        let newUserName;
        let newPassWord;
        while (flag) {
            console.log("Ten tai khoan phai co it nhat 2 ky tu.")
            newUserName = readlineSync.question("Nhap ten tai khoan: ");
            if (!this.validateName(newUserName)) {
                console.log("---SAI DINH DANG HAY NHAP LAI---")
            } else {
                flag = false;
            }
        }
        while (!flag) {
            console.log("Mat khau phai co it nhat 6 ky tu va chua cac ky tu [#?!@$%^&*-].")
            newPassWord = readlineSync.question("Nhap mat khau:")
            if (!this.validatePassword(newPassWord)) {
                console.log("---SAI DINH DANG HAY NHAP LAI---")
            } else {
                flag = true
            }
        }
        this.userList.push(new User(newUserName, newPassWord,1));

    }

    login(username: string, password: string): number {
        let index = -1;
        this.userList.map((user) => {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        })
        return index;
    }



    validateName(name: string): boolean {
        let regex = /^[a-z0-9]{2,}$/
        return regex.test(name);
    }

    validatePassword(password: string): boolean {
        let regex1 = /^(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
        return regex1.test(password);
    }
}