## 🌐 Front-end - Angular

### ✔️ Requisitos

* Node.js 18+
* Angular CLI 15+

### ▶️ Como rodar o projeto

1.  Clone o repositório e entre na pasta `frontend`:

   ```bash
   git clone https://github.com/leandromeireles/manual-movements-frontend.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto:

   ```bash
   ng serve
   ```

4. A aplicação ficará disponível em:

   ```
   http://localhost:4200
   ```

### 🔄 Integração com o back-end

* Certifique-se de que o back-end esteja rodando em `http://localhost:8080`
* O Angular consome os seguintes endpoints:

    * `GET /api/produtos`
    * `GET /api/cosifs`
    * `GET /api/movimentos`
    * `POST /api/movimentos`

### 📁 Estrutura principal

```
frontend
├── src
│   ├── app
│   │   ├── services
│   │   └── components
│   └── environments
├── angular.json
├── package.json
└── tsconfig.json
```

### ✅ Observações

* Os campos `numeroLancamento` e `usuario` são gerados automaticamente
* A aplicação usa Angular Material para layout
* Valores formatados com 3 casas decimais

### 🚫 .gitignore sugerido para frontend

```
/node_modules
/dist
/.angular
/.vscode
.DS_Store
```
