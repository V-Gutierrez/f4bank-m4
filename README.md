# F4BANK - PROOF OF CONCEPT

## Stack

Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e Moment.js
. Além disso, ele segue uma arquitetura baseada em MVC, com 4 camadas
simples:

1. View: responsável pela comunicação com agentes externos
   (como o Frontend)
1. Model: responsável pela representação das nossas entidades
1. Controller: responsável pelo direcionamento das operações
1. Repository: responsável pelas transações com o Banco de dados e validações de dados.

## Sobre

Esse foi um projeto de Backend que utilizei para treinar o uso da arquitetura MVC e alguns dos princípios do SOLID, como Single Responsability Principle e Interface Segregation Principle.
A ideia é organizar transações em um banco de dados (fictício) validando as operações, trabalhando com datas, saldos, transferencias de valores entre entidades e outros conceitos importantes como aplicação de conceitos do paradigma de programação orientada à Objetos.

## Instruções para rodar

As instruções são:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto e receber todas as instruções de uso;
1. `npm run build` para gerar uma versão possível de ser deployada com
   os arquivos transpilados para Javascript
## Deploy

Deploy para demonstração
https://f4bank-proofofconcept.herokuapp.com/


## Documentação para testes 
<br/>

<h4>POST</h4> <br/> <b>/f4bank/v1/createaccount</b> <i>Corpo da requsição:{name: string, cpf: string em estrutura de CPF (XXX.XXX.XXX-XX), birthdate: string em estrutura de data (DD/MM/YY)}</i>

<h4>GET</h4>  <br/>      <b>/f4bank/v1/checkbalance</b>    <i>Corpo da requisição: {cpf: string (XXX.XXX.XXX-XX)}</i>

<h4>POST  </h4> <br/>     <b>/f4bank/v1/deposit </b>        <i> Corpo da requisição: {cpf: string (XXX.XXX.XXX-XX), amount: number}</i>

<h4>POST </h4> <br/>      <b>/f4bank/v1/pay  </b>           <i> Corpo da requisição {cpf: string (XXX.XXX.XXX-XX), amount: number, description: string}</i>

<h4>POST </h4> <br/>      <b>/f4bank/v1/transfer</b>         <i>Corpo da requisição { cpf:string (XXX.XXX.XXX-XX) , amount: number, description: string</i>, cpfDestination: string (XXX.XXX.XXX-XX) }

<h4>GET </h4>  <br/>       <b>/f4bank/v1/transactions  </b>    <i>Corpo da requisição: {cpf: string (XXX.XXX.XXX-XX)}</i>
