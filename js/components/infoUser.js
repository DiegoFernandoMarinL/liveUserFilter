export const infoUser = ({avatar,description,id,name_full})=>{
    let plantilla = "";
    plantilla += /*html*/`
        <article class="info__users">
            <div class="image__users">
                <img src="${avatar}">
            </div>
            <div class="data__users">
                <h3>${name_full}</h3>
                <p>${description}</p>
            </div>
        </article>
       `;
    return plantilla;
}