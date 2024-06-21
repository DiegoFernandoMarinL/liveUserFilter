import { infoUser } from "../components/infoUser.js";

let varUrl = "https://6674179975872d0e0a950e53.mockapi.io/user";

export const getUser = async()=>{
    let res = await fetch(`${varUrl}`);
    let data = await res.json();
    let user = await infoUser(data);
    return user;
}
export const validaUser = async(dato)=>{
    let num = !isNaN(parseFloat(dato)) && isFinite(dato);
    if (num == true){
        let res = await fetch(`${varUrl}/${dato}`);
        let data = await res.json();
        let user = await infoUser({data});
        return user;
    }

    // let res = await fetch(`${varUrl}`);
    // let data = await res.json();
    // for (const value of Object.values(data)) {
    //     let res = await fetch(`${varUrl}/${value.id}`);
    //     let data = await res.json();
    //     if(dato == data.name_full){
    //         localStorage.setItem("prueba",JSON.stringify({data}));
    //     }
    // }
    // if (localStorage.getItem("prueba")){
    //     return localStorage.getItem("prueba");
    // }else{
    //     alert("no encontrado");
    // }

}
