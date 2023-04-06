class User {

    constructor(name) {
        this.name = name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("name is to short");
            return
        }
        else {
            return this._name = value;
        }
    }

    get name() {
        return this._name;
    }
}

let user = new User("Dhruv");
user.name = "Dhr";
let user2 = new User("Dhruv");
