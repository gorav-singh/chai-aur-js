//const tinderUser = New Object(); //SINGLETON object

const tinderUser = {}; //non singleton object

tinderUser.id = "gorav123";
tinderUser.name = "Gorav";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "gorav@gmail.com",
    fullname : {
        user_fullname : {
            firstname : "Gorav",
            lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname.user_fullname.firstname);

// Combining two or more objects

// 1. Using assign method

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};
const obj3 = {4 : "d", 5 : "e"};

// const obj4 = Object.assign({}, obj1, obj2, obj3); //here in object.assign(), the {} is the target object which is an empty object and obj1 and obj2 are the source object

// 2. using spread method

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

// SMALL NOTE => objects cannot have duplicate items

// when data comes from the database in form of arrays, so those arrays contain lots of objects in them so to access a particular array we can do the following process

const users = [
    {
        id : 1,
        email : "go@gmail.com"
    },
    {
        id : 1,
        email : "rav@gmail.com"
    },
    {
        id : 1,
        email : "go@gmail.com"
    }
]

// console.log(users[1].email);

console.log(tinderUser)

console.log(Object.keys(tinderUser));  //this returns ['id', 'name', 'isLoggedIn'] as result and we can apply loops in this as well which will be very useful when we work on the database
console.log(Object.values(tinderUser)); //this returns all the values  ['gorav123', 'Gorav', false]

console.log(Object.entries(tinderUser)); //this converts all key value pairs and puts each of them in separate arrys like this =>
// [['id', 'gorav123'], ['name', 'Gorav'], ['isLoggedIn', false]]

//sometimes what when we are looping through the objects to fetch a particular value but that value does not exist as a result it will crash so it is better to do this manually by using this method

console.log(tinderUser.hasOwnProperty('isLogged'));  
