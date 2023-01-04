import {Computer} from "../Model/Computer";

export class ComputerManger {


    private computerList: Computer[] = [];

    public addComputer(id: number): void {
        this.computerList.push(new Computer(id, "On"));
    }

    public searchById(id: number) {
        for (let i = 0; i < this.computerList.length; i++) {
            if (this.computerList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    }

    public showListComputer() {
        return this.computerList;

    }

    public showComputer(id: number) {
        let index = this.searchById(id)
        return this.showListComputer()[index];
    }

    public deleteComputer(id: number): Computer {
        let index = this.searchById(id);
            this.computerList.splice(index, 1)
        return;
    }

    public offComputer(id: number): number {

        let index = this.searchById(id);
        this.computerList[index].setStatus('Off');
        let thisTime = new Date();
        let usedTime = thisTime.getTime() - this.computerList[index].getTimeOn().getTime();
        return usedTime;
    }

    public payMent(id: number) {
        let thisTime = new Date();
        let index = this.searchById(id);
        let convertMilsToHours = 60 * 60 * 60;
        let timeUsed = thisTime.getTime() - this.computerList[index].getTimeOn().getTime();
        let pricePerHour = 100000;
        let payMent = (timeUsed / convertMilsToHours) * pricePerHour;
        return payMent;
    }
}