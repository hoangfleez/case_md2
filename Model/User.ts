export class User {
    private _username: string;
    private _password: string;
    private _id:number;
    private _role:number;


    constructor(username: string, password: string, role:number) {
        this._username = username;
        this._password = password;
        this._role = role;
    }


    getUsername(): string {
        return this._username;
    }
    setUsername(value: string) {
        this._username = value;
    }



    getPassword(): string {
        return this._password;
    }
    setPassword(value: string) {
        this._password = value;
    }
    getId(): number{
        return this._id
    }
    setId(value: number) {
        this._id = value;
    }


    getRole(): number {
        return this._role;
    }
    setRole(value: number) {
        this._role = value;
    }
}