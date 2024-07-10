#!/bin/bash

docker(){
    echo "$(tput setaf 2)Show Context$(tput setaf 0)"
    docker context ls
    docker context use default
}


terraform(){
    #terraform init
    terraform init -upgrade
    terraform apply
    #terraform destroy

}
