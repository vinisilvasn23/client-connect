#!/bin/bash

backend_dir="back-end"
frontend_dir="front-end"

install_dependencies() {
    echo "Verificando dependências em $1..."
    cd $1
    if [ ! -d "node_modules" ]; then
        echo "Instalando dependências em $1..."
        yarn install
    else
        echo "Dependências já instaladas em $1."
    fi
    cd ..
}

start_server() {
    echo "Iniciando o servidor $1..."
    cd $1
    yarn start &
    wait_for_server "http://localhost:3000/api/"
    cd ..
}

wait_for_server() {
    url=$1
    until $(curl --output /dev/null --silent --head --fail $url); do
        echo "Aguardando $url estar disponível..."
        sleep 3
    done
    echo "$url está disponível."
}

install_dependencies $backend_dir
install_dependencies $frontend_dir

start_server $backend_dir &
start_server $frontend_dir
