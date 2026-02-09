/*

5. Exercise
Convert users array from Exercise 1 to a new array, where the name properties contain the original
names (first names) and “Bundy” as last name. Use map() method.
*/

const users = [{
        name:"John",
        age: 33
    },
    {
        name:"Maxine",
        age: 24
    },
    {
        name:"Ted",
        age: 12
    },
]
console.log(users);

const withLastNames = users.map(( user) => ({
    ...user,
    name: user.name + ' Bundy'
}))

console.log(withLastNames);
console.log(users);