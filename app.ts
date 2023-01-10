const person: {
   name: string,
   age: number,
   hobbies: string[]
} = {
   name: 'Olivia',
   age: 25,
   hobbies: ['Basketball', 'Soccer']
};

console.log(person)
console.log(person.name)

// type and type assignment doesnt show in JS

/* NESTED IBJECTS & TYPES

const product: {
   id: string,
   price: number;
   tags: string[];
   details: {
      title: string,
      description: string;
   }
} = {
   id: 'abc1',
   price: 12.99,
   tags: ['great offer', 'hot-and-new'],
   details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand new!'
   }
}

*/

let arrayOfStrings: string[];
arrayOfStrings = ["This", "Is", "An", "Array", "Of", "Strings"]
let anyArray: any[];
anyArray = ["Any", 1, "Array"]

for (const hobby of person.hobbies) {
   console.log(hobby.toUpperCase())
   // error: console.log(hobby.map())
}

// Core Types
/*
1. number | 1, 5.3, -10 | All numbers
2. string | 'Hi', "Hi",`Hi` | All text values
3. boolean | true, false
4. object | {age: 30}
5. array | [1, 2, 3]
*/