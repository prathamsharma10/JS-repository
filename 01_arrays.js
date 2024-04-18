// Arrays in JS

// Array Syntax

// const myArr = [0,1,2,3,4,5]   //array use square bracket " [] "
 //Inside bracket all the things String ,number ,boolean are called as Elements,and it can be resizabel and mix of data types.

 let newArr = [0,1,2,3]
//  console.log(newArr);
//zero based indexing

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);

// ways to declare array in js
// 1
const arr = [0,1,2,3,4,5]
// console.log(arr)

// 2
const myHeroes = [ "Iron Man","Captain America","Thor","Hulk","Hawkeye","Black Widow"]
// console.log(myHeroes)
// 3
const myNewArr = new Array(0,1,2,3,4,5)  //It will automatically change into square bracket
// console.log(myNewArr)

// Array Methods
// 1 .push()=>add vakue in array
const myArr = [0,1,2,3,4,5]
myArr.push(6)
// myArr.push(7)
// myArr.push(8,9)
// console.log(myArr);

// 2.pop => removes last value added
myArr.pop()
// console.log(myArr);

// 3.unshift() => add value/element on the first/0th index
myArr.unshift(10)
// console.log(myArr);

// 4.shift() => removes the first/0th index element
myArr.shift()
// console.log(myArr);  //10 get removed
myArr.shift()
// console.log(myArr);  //0 get removed

// Method to ask questions

// 1.includes() => if element is present or not

// console.log(myArr.includes(11));  // false
// console.log(myArr.includes(2));   // true

// // 2.indexOf()
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(20));  // if value is undeclared and it written inside indexOf it will return -1.

// .join() => it bind array and convert into string

const newMyArr =  myArr.join()
// console.log(myArr);       // [1,2,3,4,5]
// console.log(typeof myArr);  //object
// after join
// console.log(newMyArr);      //1,2,3,4,5
// console.log(typeof newMyArr); //string

// console.log(myArr);
// myArr.push(0)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

myArr.unshift(0)
// console.log(myArr);

// 1 .slice() => start value include and end value excluded but do not make any change or manipulate the original array
console.log("A",myArr);

const myN1Arr= myArr.slice(1,3)   //start(1)=>included , end(3)=>excluded
console.log(myN1Arr); // [ 1, 2 ] Slice Value
console.log("B" , myArr); //  B [ 0, 1, 2, 3, 4, 5 ] No change in array

// 2 .splice() => Include both start and end value and manipulate the array by removing splice value

const myN2Arr = myArr.splice(1,3)
console.log(myN2Arr);  //[ 1, 2, 3 ]  Splice Value
console.log("C",myArr); // C [ 0, 4, 5 ]  Changed Array