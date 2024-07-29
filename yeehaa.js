//MAPS

/* let users = [
  { name: "Ahmed", age: 29, collage: "IT" },
  { name: "Ali", age: 29 },
];

let updatedUser = users.map((user, index) => {
  if (index == 0) {
    return { ...user, age: user.age + 7 };
  } else {
    return user;
  }
});
console.log(updatedUser, "new array");
 */

//FOREACH
/* let users = [
  { name: "Ahmed", age: 29, collage: "IT" },
  { name: "Ali", age: 12 },
  { name: "Noor", age: 11, collage: "IT" },
  { name: "Tubar", age: 22, collage: "Hoobar" },
];

let updatedUser = [];
users.forEach((user) => {
  if (user.name == "Ali") {
    updatedUser.push({ ...user, age: 99 });
  } else {
    updatedUser.push(user);
  }
});
console.log(updatedUser); */

//FILTER

/* let users = [
  { id: 74, name: "Ahmed", age: 29, collage: "IT" },
  { id: 83, name: "Ali", age: 12 },
  { id: 24, name: "Noor", age: 11, collage: "IT" },
  { id: 39, name: "Tubar", age: 22, collage: "Hoobar" },
];

let userIdToBeDeleted = 74;
let updatedUsers = users.filter((user) => {
  return user.id != userIdToBeDeleted;
});
console.log(updatedUsers, users);
 */

//PUSH

let users = [];

users.push({ id: 4820, name: "Ahmed", age: 27 });
users.push({ id: 5932, name: "Ali", age: 19 });
