import {UserManager} from "../Controllers/UserManager";
import {ComputerMenu} from "./ComputerMenu";


const readlineSync = require('readline-sync');

export class MainMenu {
    private userManager: UserManager = new UserManager();
    private computerMenu: ComputerMenu = new ComputerMenu
    private menu: string = `
    1. Dang nhap.
    2. Tao tai khoan moi.
    3. Thoat.
    `;

    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question(" Hay chon so: ");
                if (choice < 1 || choice > 3) {
                    console.log("<---KHONG CO SO NAY. BAN HAY CHON LAI DI!!--->" );
                }
            } while (choice < 1 || choice > 3);

            switch (choice) {
                case 1: {
                    let username = readlineSync.question("Tai khoan: ");
                    let password = readlineSync.question("Mat khau: ");
                    let login = this.userManager.login(username, password);
                    if (login == -1) {
                        console.log("<---Sai mat khau hoac tai khoan--->");
                    } else if(login == 1) {
                        // Goi den computer
                        console.log("<--- DANG NHAP THANH CONG --->")
                        this.computerMenu.selected();
                    }
                    break;
                }

                case 2: {
                    this.userManager.register();
                    console.log("<--- TAO TAI KHOAN THANH CONG ^^ --->")
                    break;
                }
                case 3: {
                    return;
                }
            }
        }
    }

}