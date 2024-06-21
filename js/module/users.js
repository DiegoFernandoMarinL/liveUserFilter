import { infoUser } from "../components/infoUser.js";

let varUrl = "https://6674179975872d0e0a950e53.mockapi.io/user";

export const getUser = async({id})=>{
    let res = await fetch(`${varUrl}/${id}`);
    let data = await res.json();
    let user = await infoUser(data);
    console.log(user);
    return user;
}