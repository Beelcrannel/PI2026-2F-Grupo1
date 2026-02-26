## AgroLink - Rede para produtores e veterinários

Projeto exemplo de uma rede social/profissional simples focada em produtores rurais, veterinários e usuários comuns.

### Tecnologias

- **Backend**: Python, Flask, SQLite (via `sqlite3` nativo)
- **Frontend**: HTML, CSS, JavaScript

### Funcionalidades principais

- Cadastro e login de usuários com três tipos de conta:
  - `produtor`
  - `veterinario`
  - `usuario` (usuário comum)
- Perfis públicos básicos.
- Produtores podem cadastrar produtos/ofertas.
- Página de mercado listando todas as ofertas.
- Listagem de veterinários.
- Produtores (ou qualquer usuário logado) podem enviar mensagem para veterinários.
- Painel do usuário com resumo de produtos e mensagens.

### Como rodar

1. Crie e ative um ambiente virtual (opcional, mas recomendado):

   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

2. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```

3. Execute a aplicação:

   ```bash
   python app.py
   ```

4. Acesse no navegador:

   - `http://127.0.0.1:5000/`

### Estrutura básica de pastas

- `app.py` — aplicação Flask e modelos de dados.
- `templates/` — arquivos HTML.
- `static/css/style.css` — estilos.
- `static/js/main.js` — JavaScript simples.
- `database.db` — banco SQLite (criado automaticamente ao rodar).

### Observações

- A chave `SECRET_KEY` em `app.py` está fixa apenas para desenvolvimento. Em produção, use uma variável de ambiente ou valor gerado de forma segura.
- Este é um MVP simplificado; mais recursos (busca avançada, filtros, upload de fotos, etc.) podem ser adicionados facilmente.

