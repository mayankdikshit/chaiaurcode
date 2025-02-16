p1 = {
    name : "mayank",
    city : "meerut",
    address : {
        h : 2,
        s : 1,
    }
}

// p2 = {
//      ...p1
// }

p2 = {
    newName : p1.name,
    newCity : p1.city, 
    Newddress : p1.address,
}

p2.newName = "jerry"
p1.address.h = 2;

console.log(p2)
console.log(p1)



const p1_toString = JSON.stringify(p1);

console.log(p1_toString);

let again_convertingItToObject = JSON.parse(p1_toString);

console.log(again_convertingItToObject);