var error = /** @class */ (function () {
    function error(message) {
        if (message === void 0) { message = "Error!"; }
        this.message = message;
    }
    return error;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return "Hello " + this.name + "! Happy " + this.age + " year" + (this.age != 1 ? "s" : "");
    };
    return Person;
}());
function isError(object) {
    if (object.message) {
        return true;
    }
    return false;
}
var harry = new Person("Harry", 20);
var flora = new Person("Flora", 20);
var database = [flora, harry];
function findUserByName(name) {
    var users = database.filter(function (user) {
        return user.name == name;
    });
    if (users[0]) {
        return users[0];
    }
    else {
        return new Error("User not found");
    }
}
function parseResponse(res) {
    if (isError(res)) {
        return res.message;
    }
    else {
        return res.toString();
    }
}
function main() {
    var name = process.argv[2];
    if (name) {
        var user = findUserByName(name);
        console.log(parseResponse(user));
    }
    else {
        var user = findUserByName("Flora");
        console.log(parseResponse(user));
        var user = findUserByName("Will");
        console.log(parseResponse(user));
    }
}
main();
