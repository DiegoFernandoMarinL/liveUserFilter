export const infoUser = (data)=>{
    let plantilla = "";
    for (const value of Object.values(data)) {
        plantilla += /*html*/`
            <article class="info__users">
                <div class="image__users">
                    <img src="${value.avatar}">
                </div>
                <div class="data__users">
                    <h3>${value.name_full}</h3>
                    <p>${value.description}</p>
                </div>
            </article>
           `;
    }
    return plantilla;
}