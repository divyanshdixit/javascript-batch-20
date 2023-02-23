var x = 10;
x = 40;
console.log(x);

var y = 20;
var z = 30;

// global scope => var

// let, const => block scope

{
    let a = 10;
    // a = 20;
    // const a = 10;
    // a = 30;
    console.log(a);
}

// re-declartion 
{
    // not allowed
    let a = 10;
    console.log(a)
    // const a = 20;

}
var w;
w = 0;

let s;
s =1;

const f = 10;

b = 100;
console.log(b)

const obj1 = { // 2000
    name: 'divyansh'
}
console.log(obj1);

obj1.name = 'new name'
console.log(obj1);

// {
//     let y = 10;
//     let y =20
// }

{
let u = 10;
// var u = 20;
}
console.log(u)