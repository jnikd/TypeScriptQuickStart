interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// implementsのような記述は不要
var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);