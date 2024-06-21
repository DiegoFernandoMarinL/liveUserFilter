import { infoUser } from "../components/infoUser.js";

let varUrl = "https://6674179975872d0e0a950e53.mockapi.io/user";

export const getUser = async()=>{
    let res = await fetch(`${varUrl}`);
    let data = await res.json();
    localStorage.setItem("allUsers",JSON.stringify({data}));
    let user = await infoUser(data);
    return user;
}
export const validaUser = async(dato)=>{
    let res = localStorage.getItem("allUsers");
    res = JSON.parse(res);
    let num = !isNaN(parseFloat(dato)) && isFinite(dato);
    if (num == true){
        let data = res.data[dato];
        let user = await infoUser({data});
        return user;
    };
    let usersSearch = [];
    res.data.forEach(element => {
        let name = res.data[element.id-1].name_full.toUpperCase();
        if (name.includes(dato.toUpperCase())){
            usersSearch.push(element);
            localStorage.setItem("Users",JSON.stringify(usersSearch));
        }   
    });
    if (localStorage.getItem("Users")){
        let user = await infoUser(JSON.parse(localStorage.getItem("Users")));
        return user;
    }
    
}
