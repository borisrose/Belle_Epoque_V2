import button from "../button/button";

export default function (data: any) {
  const buttonData = {
    className: `menu-item__button`,
    textContent: "Ajouter au panier",
    id: `menu-item-button-${data.id}`
  };
  return `
            <li class="list-item menu-item menu-item--${data.id}">
                <figure>
                        <img src="${data.url}" alt="image de ${data.name}"/>
                </figure>
                <section>
                    <section>
                        <h3>${data.name}</h3>
                    </section>
                    <section>
                        ${button(buttonData)}
                    </section>
                </section>
               
            </li>
        
        `;
}
