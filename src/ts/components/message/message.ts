export default function (data: any) {
  return `
            <section class="custom-message">        
                ${data.textContent ? `<p>${data.textContent}</p>` : data.template}          
            </section>
        `;
}
