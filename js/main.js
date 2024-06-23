import { getUser } from "./module/users.js";
import { validaUser } from "./module/users.js";

let info__allUsers = document.querySelector(".info__allUsers");
let input__search = document.querySelector(".input__search");

let searchUsers = async e=> {
    let dataSearch = e.target.value;
    let data = await validaUser(dataSearch);
    //console.log(data);
    info__allUsers.innerHTML = data;
}

input__search.addEventListener("input", searchUsers);

info__allUsers.innerHTML = await getUser();




