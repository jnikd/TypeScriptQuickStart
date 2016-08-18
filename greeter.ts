// TypeScript Quick start
// https://www.typescriptlang.org/docs/tutorial.html

// : string のように型情報を与えられる
function greeter(person : string) {
    return "Hello, " + person;
}

var user = "Jane User";
// 間違った型で渡すとwarningになるが.jsファイルは生成される
// var user = 123;

document.body.innerHTML = greeter(user);