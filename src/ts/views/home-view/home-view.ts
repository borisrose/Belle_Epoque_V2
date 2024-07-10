import button from "../../components/button/button";

export default function () {
  const data = {
    textContent: "Voir nos produits",
    id: "home-menu-button"
  };

  return `
            <main 
                class="main custom-main home__main"
            >
               <section>
                    ${button(data)}
               </section>
            </main>
        
        `;
}
