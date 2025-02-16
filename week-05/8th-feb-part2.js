p1 = {
    name : "mayank",
    city : "meerut",
    address : {
        h : 2,
        s : 1,
    }
}

p2 = {
     ...p1
}

// p2 = {
//     newName : p1.name,
//     newCity : p1.city, 
//     Newddress : p1.address,
// }

p2.Newname = "jerry";

console.log(p1)
console.log(p2)



