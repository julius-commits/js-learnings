let getUsers = () => {
  var users = [
    { userName: "Ahmed", email: "Ahmed@gmail.com", age: 99 },
    { userName: "Ali", email: "Ali@gmail.com" },
  ];
  return users;
};

let findUser = (userYouWantToSearchFor) => {
  let mm = getUsers();
  let user = mm.find((m) => {
    return (m.userName = userYouWantToSearchFor);
  });
  console.log(user);
};
console.log(findUser("Ahmed"));
