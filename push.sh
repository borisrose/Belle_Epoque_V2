#!/bin/bash

control(){
    local param="$1"
    local status=$?
    if [ $status -eq 0 ]; then
        echo "✅ $param done"
        return 0
    else
        echo "$(tput setaf 1)❌ $param failed$(tput setaf 0)"
        return $status
    fi
}

prettier_check(){
    echo "$(tput setaf 2) Running the prettier format:write script $(tput setaf 0)"
    npm run format:write
    control "prettier"
}

git_flow(){
    git add . 
    git commit -m $1 && git push origin master
    control "git"
}

declare -r message="$(tput setaf 2)Souhaitez-vous démarrer le flux de travail de push ? (oui/non)$(tput setaf 0)"

while true; do
    echo ""
    read -p "$message " answer

    answer=$(echo "$answer" | tr '[:upper:]' '[:lower:]')

    if [[ "$answer" == "oui" || "$answer" == "non" ]]; then
        echo "Votre réponse : $answer"
        break
    else
        echo "$(tput setaf 1)Veuillez répondre par 'oui' ou 'non'.$(tput setaf 0)"
    fi
done

if [[ "$answer" == "oui" ]]; then
    echo "Démarrage du flux de travail de push..."
    if prettier_check; then
        echo "$(tput setaf 2)Le script prettier s'est exécuté avec succès. Exécution de la suite...$(tput setaf 0)"
        git_flow "$1"
    else
        echo "$(tput setaf 1)Le script prettier a échoué. Annulation du flux de travail de push.$(tput setaf 0)"
    fi
else
    echo "Le flux de travail de push a été annulé."
fi
