const navBar = () => {
  return `
             <nav>
                  <a href="">            
                       <i class="fa-solid fa-house"></i>
                      <span>
                        Accueil
                      </span>
                  </a>

                  <a href="#menu">
                    <i class="fa-solid fa-utensils"></i>
                    <span>Menu</span>
                  </a>

                  <a href="#login">
                   
                      <i class="fa-solid fa-right-to-bracket"></i>
             
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
