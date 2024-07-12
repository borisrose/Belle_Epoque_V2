export default function (data: any) {
  return `

            <article class="article-input">
                <section class="article-input__label-and-input">
                    <label for="${data.id}"></label>
                    <input
                        name="${data.name}"
                        class="input" 
                        id="${data.id}"
                        type="${data.type ? data.type : "text"}" 
                        placeholder="${data.placeholder}"
                    />
                </section>
                <section id="${data.id}-error" class="article-input__error">
                </section>
            </article>
        
        
        `;
}
