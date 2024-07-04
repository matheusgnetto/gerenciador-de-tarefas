# Projeto Academico - Gerenciador de Tarefas

## Visão Geral do Projeto

Este projeto é um Gerenciador de Tarefas desenvolvido utilizando Angular no frontend e uma API REST no backend. O objetivo do projeto é permitir a criação, visualização, conclusao e exclusão de tarefas de maneira simples e eficiente.

## Funcionalidades Principais

- **Criação de Tarefas**: Permite ao usuário criar novas tarefas com título, descrição, data de vencimento e status.
- **Visualização de Tarefas**: Exibe a lista de tarefas existentes com todas as suas informações.
- **Edição de Tarefas**: Permite ao usuário marcar uma tarefa como completa ou pendente.
- **Exclusão de Tarefas**: Permite ao usuário excluir tarefas.

## Estrutura do Projeto

### Frontend (Angular)

- **Componentes**:
  - `TaskViewComponent`: Componente principal que gerencia a visualização e manipulação das tarefas.
  - **Templates**:
    - Formulário de criação de tarefas.
    - Lista de tarefas.
  - **Estilos**:
    - Estilização dos campos de entrada, botões e contêineres.

- **Serviços**:
  - `TaskService`: Serviço que realiza as operações de CRUD (Create, Read, Update, Delete) utilizando a API REST.

### Backend (API REST)

- **Endpoints**:
  - `GET /api/tasks`: Recupera todas as tarefas.
  - `GET /api/tasks/:id`: Recupera uma tarefa específica por ID.
  - `POST /api/tasks`: Cria uma nova tarefa.
  - `PUT /api/tasks/:id`: Atualiza uma tarefa existente por ID.
  - `DELETE /api/tasks/:id`: Exclui uma tarefa por ID.

## Rotas da API

1. **Recuperar Todas as Tarefas**
   - **Endpoint**: `GET http://localhost:3000/api/tasks`
   - **Descrição**: Retorna uma lista de todas as tarefas.

2. **Recuperar Tarefa por ID**
   - **Endpoint**: `GET http://localhost:3000/api/tasks/:id`
   - **Descrição**: Retorna uma tarefa específica com base no ID fornecido.
   - **Parâmetro**: `id` - ID da tarefa.

3. **Criar Nova Tarefa**
   - **Endpoint**: `POST http://localhost:3000/api/tasks`
   - **Descrição**: Cria uma nova tarefa com os dados fornecidos.
   - **Body**: 
     ```json
     {
       "titulo": "string",
       "descricao": "string",
       "status": "string",
       "data_vencimento": "string"
     }
     ```

4. **Atualizar Tarefa**
   - **Endpoint**: `PUT http://localhost:3000/api/tasks/:id`
   - **Descrição**: Atualiza uma tarefa existente com base no ID fornecido e nos dados fornecidos.
   - **Parâmetro**: `id` - ID da tarefa.
   - **Body**: 
     ```json
     {
       "titulo": "string",
       "descricao": "string",
       "status": "string",
       "data_vencimento": "string"
     }
     ```

5. **Excluir Tarefa**
   - **Endpoint**: `DELETE http://localhost:3000/api/tasks/:id`
   - **Descrição**: Exclui uma tarefa com base no ID fornecido.
   - **Parâmetro**: `id` - ID da tarefa.

## Configuração do Ambiente

Siga as instruções abaixo para configurar o ambiente e executar os serviços do projeto.

### Pré-requisitos

- Node.js ([Instalar Node.js](https://nodejs.org/))
- PostgreSQL ([Instalar PostgreSQL](https://www.postgresql.org/))

### Passo a Passo

1. **Clone o repositório:**

  ```sh
  git clone https://github.com/matheusgnetto/gerenciador-de-tarefas.git
  cd gerenciador-de-tarefas
  ```

2. **Inicialize o projeto Node.js e instale as dependências:**

  ```
  npm init -y
  npm install express pg dotenv
  npm install nodemon --save-dev
  ```

3. **Configure o Banco de Dados PostgreSQL:**
###### Crie um arquivo .env na pasta raiz.
```
DB_USER=seu_usuario
DB_HOST=localhost
DB_NAME=seu_banco_de_dados
DB_PASSWORD=sua_senha
DB_PORT=5432
PORT=3000
```

4. **Adicione o arquivo .gitignore:**
###### Crie e adicione os arquivos e pastas a serem ignorados pelo Git:
```
node_modules/
.env
```

5. **Execute o servidor:**
```
npm start
```

6. **Acesse a página:**
Abra o navegador e vá para http://localhost:4200.
