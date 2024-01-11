# Client Connect

## Descrição

Este projeto visa criar uma aplicação simples para gerenciar clientes e seus contatos. A ideia é permitir que os usuários possam adicionar, visualizar e editar informações sobre clientes, bem como adicionar contatos específicos para cada cliente.

## Instalação

1. Clone este repositório.
   ```bash
   git clone https://github.com/Kenzie-Academy-Brasil-Developers/client-connect-M6
   cd client-connect-M6
   ```

2. Configuração do Ambiente.
 Acesse o Diretório front-end:
```bash
cd front-end
````
Instale as dependencias:
```bash
Npm:
npm install
Yarn:
yarn install
````
 Acesse o Diretório back-end:
```bash
cd back-end
````
Instale as dependencias com o mesmo comando acima.

Configure o Arquivo de Ambiente:
Acesse o arquivo (.env.example) no diretório back-end, renomeie para (.env) e preencha como no exemplo.
```bash
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db>?schema=public"
SECRET_KEY=sua-chave-secreta
````

3. Efetue a migração.
```bash
npx prisma migrate dev 
````

4. Execute o servidor.
```bash
Npm:
npm start
Yarn:
yarn start
````
Para Consultar a documentação da Api acesse http://localhost:3000/api/

5. Agora dentro do diretório front-end execute a aplicação:
```bash
Npm:
npm start
Yarn:
yarn start
````
7. Acesse em http://localhost:5173/



Tecnologias ultilizadas:
Back end: Nest, Prisma, Typescript

Front end: React, zod, axios, Styled Components, Typescript

........................................................................