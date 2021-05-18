class error {
    message: String;
    constructor(message = "Error!") {
        this.message = message
    }
}

type response = error | Person

class Person {
    name: String;
    age: Number;

    constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }
    toString(): String {
        return `Hello ${this.name}! Happy ${this.age} year` + (this.age != 1 ? "s" : "")
    }
}


function isError(object: any): object is error {
    if ((object as error).message) {
        return true
    }
    return false
}

var harry = new Person("Harry", 20)

var flora = new Person("Flora", 20)


var database: Array<Person> = [flora, harry]

function findUserByName(name: String): response {
    var users: Array<Person> = database.filter((user: Person) => {
        return user.name == name
    })

    if (users[0]) {
        return users[0]
    } else {
        return new Error("User not found")
    }
}


function parseResponse(res: response): String {
    if (isError(res)) {
        return res.message
    } else {
        return res.toString()
    }
}

function main() {
    var name = process.argv[2]
    if (name) {
        var user = findUserByName(name)
        console.log(parseResponse(user))
    } else {
        var user = findUserByName("Flora");
        console.log(parseResponse(user));

        var user = findUserByName("Will");
        console.log(parseResponse(user));
    }
}
main()