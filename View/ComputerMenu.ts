import {ComputerManger} from "../Controllers/ComputerManger";


const readlineSync = require('readline-sync');

export class ComputerMenu {
    private computerManger: ComputerManger = new ComputerManger();
    private menu = `
    1. Them may.
    2. Tim kiem may.
    3. Hien thi cac may.
    4. Xoa may.
    5. Tinh tien.
    6. Quay ve man hinh chinh.`

    selected() {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Hay chon so: ");
                if (choice < 1 || choice > 6) {
                    console.log("<---KHONG CO SO NAY. HAY CHON LAI--->");
                }
            } while (choice < 1 || choice > 6);

            switch (choice) {
                case 1: {
                    let id = +readlineSync.question("Them id:");
                    let notExist = -1;
                    let index = this.computerManger.searchById(id);
                    if (index == notExist) {
                        this.computerManger.addComputer(id)
                        console.log("Da them ID.")
                    } else {
                        console.log("ID nay da ton tai");
                    }
                    break;
                }
                case 2: {
                    let id = +readlineSync.question(" Ban can tim may bao nhieu? ")
                    let no = -1;
                    let isIdExist = this.computerManger.searchById(id);
                    if (isIdExist == no) {
                        console.log("Khong co may nay");
                        break;
                    } else {
                        console.table(this.computerManger.showComputer(id))
                    }
                    break;
                }

                case 3: {
                    console.table(this.computerManger.showListComputer());
                    break;
                }
                case 4: {
                    let id = +readlineSync.question("Nhap ID ban muon xoa:");
                    let isIdExist = this.computerManger.searchById(id);
                    let no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co ID nay!!')
                        } else {
                            this.computerManger.deleteComputer(id);
                            break;
                        }
                    }
                    break;

                }
                case 5: {
                    let id = +readlineSync.question("Nhap id:");
                    let isIdExist = this.computerManger.searchById(id);
                    let no = -1;

                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co may nay')
                        } else {
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
    }
}