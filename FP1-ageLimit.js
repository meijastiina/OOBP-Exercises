/* FP Exercises */
/* 1 - Modify the checkAge() function to be pure. */
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
const ageLimit = 18;

function checkAge(user) {
    const ageLimit = 18;
    return user.age >= ageLimit;
}
function checkAge2(user) {
    return user.age >= 18;
}
function checkAge3(user, ageLimit) {
    return user.age >= ageLimit;
}
console.log(checkAge(users[0]));
console.log(checkAge2(users[1]) ? 'you are ok': 'you are a child');
if(checkAge3(users[2], 18)) {
    console.log('you are ok');
} else {
    console.log('you are a child');
}