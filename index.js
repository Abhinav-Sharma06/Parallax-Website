// function factoryEx(length, breadth){

//     return {
//         length,
//         breadth,

//         area(){
//             return length*breadth;
//         }
//     }
// }

// // let a = factoryEx(4,7);
// // console.log(a.length, a.breadth);
// // console.log(a.area());

// let obj = new factoryEx(3,9);
// console.log(obj.area());

// obj.perimeter = 56;
// console.log(obj);
// delete obj.breadth;
// console.log(obj);
// console.log(obj.constructor);

function divide(){
    let a = 5;
    let b = 7;

    this.calculate = function(){
        console.log(a/b);
    };
};

let abhi = new divide();