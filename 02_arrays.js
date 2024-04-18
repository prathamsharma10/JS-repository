const marvelHeroes = ["Thor","Ironman","Spiderman"]
const dcHeroes = ["Superman","Flash","Batman"]

// marvelHeroes.push(dcHeroes)  //1.push =>add value to array
//  console.log(marvelHeroes);   //Array pushed inside array, js consider array as element
// [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
 
// console.log(marvelHeroes[3]); // [ 'Superman', 'Flash', 'Batman' ]=3index conatain array

// console.log(marvelHeroes[3][1]); // Flash => 3 index conatain array, array 1 index =>flash

// 2 .concat() =>same as push treat array as element
const all =marvelHeroes.concat(dcHeroes)

// console.log(all); 
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// const a1 = ["hulk","thor"]
// const a2 = ["flash","ronin"]

// const con = a1.concat(a2)
// console.log(con);

// 3. spread operator (...) =>separate elements from array make them individual element

// const spreadAll = [...marvelHeroes,...dcHeroes]
// console.log(spreadAll); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// .flat("depth") =>solve array[array][array[array]] =>[array]

const arrayInsideArray = [1,2,3,[4,5,6],[6,7,[4,5]]]

const arrayForAll = arrayInsideArray.flat(Infinity)

// console.log(arrayForAll);
// [
//     1, 2, 3, 4, 5,
//     6, 6, 7, 4, 5
// ]

//1. Array.isArray() => checks if the given input is array or not

// console.log(Array.isArray("Hitesh"));//false
// console.log(Array.isArray([1,2])) //true

// 2.Array.from() =>convert string elements ,numbers,bool ... to array
// console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ] 

// Interview Q 
// console.log(Array.from({fname:"Pratham"})); //[]  => interesting case return empty array

// 3.Array.of() => return a new array from set of elements

let n1=10
let n2=20
let n3=30

console.log(Array.of(n1,n2,n3)); //[ 10, 20, 30 ]
console.log(Array.of(n1,n1,n1)); //[ 10, 10, 10 ]