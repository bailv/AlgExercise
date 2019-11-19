const Stack = require("./StackBasedOnArray");

const stack = new Stack(5);

stack.put("1");
stack.put("2");
stack.put("3");

console.log(stack.display());

console.log("pop", stack.pop());
console.log("pop", stack.pop());
console.log(stack.display());

stack.put("4");
stack.put("5");
stack.put("6");
console.log(stack.display());

stack.put("7");
console.log(stack.display());

console.log("put 8", stack.put("8"));
