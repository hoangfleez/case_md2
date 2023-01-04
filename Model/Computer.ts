export class Computer {
    private _id: number;
    private _status: string;
    private _timeOn: Date;


    constructor(id: number, status: string) {
        this._id = id;
        this._status = status;
        this._timeOn = new Date();
    }


    getTimeOn() {
        return this._timeOn;
    }
    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }


    getStatus(): string {
        return this._status;
    }

    setStatus(value: string) {
        this._status = value;
    }

}