export class User {
    public id: Int16Array;
    public password: string;
    public username: string;
    public firstname: string;
    public lastname: string;

    constructor(username: string, password: string, firstname: string, lastname: string) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}