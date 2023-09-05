let number = 2;
let str = number.toString();
console.log(str);

let statement1 = true;
let statement2 = true;
if(statement1 && statement2){
console.log("both are true");
} else {
console.log("one statement is false")
}

let condition1 = true;
let condition2 = false;
if (condition1 || condition2){
    console.log("one condition is true")
} else{
    console.log("both conditions are either true or false")
}

let condition3 = false;
let condition4 = false;
if(!condition3 && !condition4){
console.log("both conditions are false")
} else{
    console.log("both statements are not false")
}