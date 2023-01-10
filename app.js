var person = {
    name: 'Olivia',
    age: 25,
    hobbies: ['Basketball', 'Soccer']
};
console.log(person);
console.log(person.name);
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
var arrayOfStrings;
arrayOfStrings = ["This", "Is", "An", "Array", "Of", "Strings"];
var anyArray;
anyArray = ["Any", 1, "Array"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
