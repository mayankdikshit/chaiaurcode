// 1
const teas = ["green", "black", "white", "oolong", "herbal"];
console.log(teas);

// 2

teas.push("Chamomile");
console.log(teas);

//3
const index = teas.indexOf("oolong");

console.log(index);

teas.splice(3, 1);
console.log(teas);

//4

const caffinatedTeas = teas.filter((tea) => tea !== "herbal");
console.log(caffinatedTeas);

//5
const sorted = teas.sort();

console.log(sorted);

//6

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

//7

let caffinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "herbal") {
    console.log(caffinatedMyTeas++);
  }
}

//8

const uppercase = [];

for (let i = 0; i < teas.length; i++) {
  uppercase.push(teas[i].toUpperCase());
}
console.log(uppercase);

//9

let longestTea = "";
console.log(typeof(longestTea));

for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

console.log(longestTea);
console.log(typeof(longestTea));


// 10

let reversedArray = [];

for (let i = teas.length-1; i >= 0; i--){ // n-1, n-2, n-2
    reversedArray.push(teas[i]);
}

console.log(reversedArray);


function multiply(num1,num2){
    return num1*num2;
}


// let myFunction = (a, b) => a * b;

