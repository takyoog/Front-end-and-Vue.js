let a = "5";
let b = 2;
let c = null;
let d = undefined;

let result1 = a + b;
let result2 = a - b;
let result3 = a * b;
let result4 = c + b;
let result5 = d + b;

console.log("a + b =", result1, "тип:", typeof result1);
console.log("a - b =", result2, "тип:", typeof result2);
console.log("a * b =", result3, "тип:", typeof result3);
console.log("c + b =", result4, "тип:", typeof result4);
console.log("d + b =", result5, "тип:", typeof result5);
