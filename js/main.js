import { getUser } from "./module/users.js";

let info__allUsers = document.querySelector(".info__allUsers");
console.log(info__allUsers);

info__allUsers.innerHTML = await getUser({id:"5"});




