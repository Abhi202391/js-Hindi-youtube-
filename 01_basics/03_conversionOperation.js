let score = 33
let score1 = "33abc"
let score2 = null
let score3 = undefined
let score4 = true
let score5 = "hitesh"

//const {score} = req.body // Here there is no guarentee that the numebr that has come is string or object or any other form.

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score1)
console.log( valueInNumber); // NaN => not a number. so a string got converted to number but it's Not a Number. Therfore NaN is also special type and keep note that do not rely on numbers. In Js there is no strict check(not a good point)
let valueInNumber1 = Number(score2)
console.log( valueInNumber1);// there may be case you were matching 0 with temp. so in that case you may get wrong interpretation
 let valueInNumber2 =  Number(score3)
 console.log(typeof valueInNumber2);
 console.log(valueInNumber2);

  let valueInNumber3 =  Number(score4)
 console.log(typeof valueInNumber3);
 console.log(valueInNumber3);
 
 let valueInNumber4 =  Number(score5)
 console.log(typeof valueInNumber4);
 console.log(valueInNumber4);

 // "33" => 33
 // "33abc" => NaN
 // true => 1; false => 0
 let isloggedIn = 1

 let booleanIsLoggedIn = Boolean(isloggedIn)
 console.log(booleanIsLoggedIn);

 // 1 => true 
 // 0 => false 
 // "" => false 
 // "hitesh" => true 
 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);
 
 
 