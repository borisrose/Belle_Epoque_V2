export default function (data: any) {
  return `
            <button 
                id="${data.id ? data.id : ""}" 
                type="${data.type ? data.type : "button"}"
                class="button ${data.className ? data.className : ""}"
            >   
                ${data.textContent ? data.textContent : "Aucune valeur"}
            </button>
        
        
        `;
}
