// 1
const teas = ["green", "black", "white", "oolong", "herbal"];
console.log(teas);

// 2

teas.push("Chamomile");
console.log(teas);

//3
const index = teas.indexOf("oolong");

console.log(index);


teas.splice(3,1);
console.log(teas);

//4 

const caffinatedTeas = teas.filter((tea) => tea !== "herbal");
console.log(caffinatedTeas);


//5
const sorted = teas.sort();

console.log(sorted);

//6

for (let  i=0; i<teas.length; i++){
    console.log(teas[i]);
}

//7

let caffinatedMyTeas = 0
for (let i=0; i<teas.length; i++){
    if(teas[i] !== "herbal"){
        console.log(caffinatedMyTeas++);
    }
}