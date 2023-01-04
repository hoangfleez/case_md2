const readlineSync = require('readline-sync');

export class UserMenu {
    private menu: string = `
    1. Dich vu.
    2. Goi nhan vien.
    3. Quy ve man hinh chinh.`;

    public selection(): void {
        while (true) {
            let choice;
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
    }
}