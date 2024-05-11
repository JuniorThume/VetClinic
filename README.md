# VetClinic

Este é um projeto desenvolvido para criar, consultar e remover tutores e pets de uma clinica veterinária.

## Índice

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Endpoints](#endpoints)
- [Arquivo .env](#arquivo-env)
- [Erros encontrados](#erros-encotrados)

## Instalação

Certifique-se de ter o Node.js instalado. Clone o repositório e instale as dependências usando npm:

```bash
git clone https://github.com/JuniorThume/VetClinic.git
cd VetClinic
npm install
```

## Como usar
Na pasta do projeto no terminal, execute o seguinte comando:
``` bash
# Inicia a execução da API.
npm start
```

Você pode fazer uso do Postman para testar a aplicação nas rotas mencionadas abaixo.

## Endpoints

    GET - /tutors
    POST - /tutors
    PUT - /tutors/{tutorID}
    DELETE - /tutors/{tutorId}

    POST - /pets/{tutorId}
    PUT - /pets/{petId}/tutors/{tutorId}
    DELETE - /pets/{petId}/tutors/{tutorId}

## Arquivo .env

O projeto possui um arquivo .env para variáveis de ambiente que está definido da seguinte forma:
    
    PORT_DB=<porta que o servidor irá escutar>
    NAME_DB=<nome do arquivo que armazena>

Onde o instrutor terá que criar um arquivo .env com a exata mesma estrutura acima demonstrada.

## Erros encotrados

Todo e qualquer erro encontrado pode ser reportado a mim, pois acredito que existam muitas coisas para melhorar.