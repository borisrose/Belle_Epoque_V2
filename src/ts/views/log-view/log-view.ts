import form from "../../components/form/form";
import message from "../../components/message/message";

// une fonction donc elle contient une partie de la logique de présentation de la page représenté par le fragment #login
export default function (isLoggingIn: boolean) {
  const data = {
    formId: "log-form",
    inputs: [
      {
        name: "email",
        id: "email",
        type: "email",
        placeholder: "Entrer votre email"
      },
      {
        name: "password",
        id: "password",
        type: "password",
        placeholder: "Entrer votre mot de passe"
      }
    ],
    buttons: [
      {
        id: "submit-button",
        type: "submit",
        className: "custom-button",
        textContent: "Valider"
      },
      {
        id: "reset-button",
        type: "reset",
        className: "custom-button",
        textContent: "Réinitialiser"
      }
    ]
  };

  if (!isLoggingIn) {
    data.inputs.push({
      name: "confirmed-password",
      id: "confirmed-password",
      type: "password",
      placeholder: "Confirmer le mot de passe"
    });
  }

  const messageData = {
    template: !isLoggingIn
      ? "<p>Déjà inscrit(e) ? Connectez-vous <a href='#login'>ici</a></p>"
      : "<p> Pas encore inscrit(e) ? Inscrivez-vous <a href='#register'>ici</a></p>"
  };

  return `
            <main class="main custom-main log__main">
                <section>
                    ${form(data)}
                    ${message(messageData)}
                </section>
                
            </main>
        
        `;
}
