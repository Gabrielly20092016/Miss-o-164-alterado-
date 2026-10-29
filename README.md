## UC10 - Realizar Testes nas Aplicações Desenvolvidas
## Gabrielly Vitória


## Descrição  e Funcionalidades

-Aplicação de controle de tarefas
- Cadastra tarefas: INSERT -> CREATE
-Consultar e listar tarefas:SELECT -> READ
-Exclui tarefas: UPDATE-> UPDATE
-Atualiza tarefas: DELETE -> DELETE




## Tecnologias

| Tecnologia | Função | Versão | Comando |
|---|---|---|---|
| HTML | Estrutura e organização da página web | HTML5 | — |
| CSS | Estilização e design da página | CSS3 | — |
| JavaScript | Interatividade e comportamento da aplicação | ECMAScript | — |
| Node.js | Ambiente de execução que permite executar JavaScript fora do navegador | A verificar | `node -v` |
| Jest | Ferramenta para executar testes automatizados | A verificar | `npx jest --version` |
| SQLite | Banco de dados relacional | A verificar | `node -e "console.log(require('sqlite3').VERSION)"` |
| Express | Framework back-end que recebe e processa requisições HTTP | A verificar | `npm list express` |
| Supertest | Ferramenta que simula requisições HTTP para testar a API | A verificar | `npm list supertest` |
| sqlite3 | Biblioteca que permite acessar o SQLite pelo Node.js | 6.0.1 | `npm list sqlite3` |



# Testes

## Testes Unitários

| Caso de teste |   Entrada | Saída esperada |
| ------------- |    -------- | -------------- |
|1. Limitar o título a 120 caracteres |  Tentar digitar mais de 120 caracteres | O campo permite apenas 120 caraceteres, depois bloqueia | 
|2. Se o título estiver vazio  |  Título vazio ("")	 | Failed to fetch|  
|3.Remover espaços do título |  "  estudar amanhã     "	 |  "estudar amanhã" |   