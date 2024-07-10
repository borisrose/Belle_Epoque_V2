const navBar = () => {
  return `
             <nav>
                  <a href=""
                      <span aria-label="icone de la page d'accueil">
                        <i class="fa-solid fa-house"></i>
                      </span>
                      <span>
                        Accueil
                      </span>
                  </a>

                  <a href="#menu">
                    <span>Menu<span>
                    <i class="fa-solid fa-utensils"></i>
                  </a>

                  <a href="#login">
                      <span aria-label="icone de la page de connexion">
                        <i class="fa-solid fa-right-to-bracket"></i>
                     <span>
                     <span>
                        Connexion
                     </span>
                  </a>
              </nav>
        
        
        `;
};

export default function () {
  return ` 
            <header class="header custom-header">
                    <a href="">
                        <span aria-label="Nom de l'application">Belle Epoque</span>
                    </a>
                    ${navBar()}
            </header>
        
        `;
}
