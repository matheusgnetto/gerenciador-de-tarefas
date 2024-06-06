# Projeto Academico - Gerenciador de Tarefas

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