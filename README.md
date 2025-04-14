
# Sistema de Gerenciamento de Zoológico  

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar habilidades em desenvolvimento web fullstack, utilizando **React** para o frontend e inicialmente **.NET Core + SQL Server** para o backend. Devido a dificuldades na integração, optei por migrar para **Node.js** para simplificar o desenvolvimento.  

## Status do Projeto  

O sistema foi implementado com as seguintes funcionalidades:  
✅ **Frontend (React)**  
- Cadastro de animais (nome, descrição, data de nascimento, espécie, habitat e país de origem)  
- Cadastro de cuidados (nome do cuidado, descrição e frequência)  
- Operações CRUD básicas para ambas as entidades (listagem, cadastro, edição e remoção)  
- Interface responsiva e intuitiva  

✅ **Backend (Node.js)**  
- API REST com endpoints para animais e cuidados  
- Testes básicos de funcionamento dos endpoints  

⚠ **Integração Frontend-Backend**  
- Tive dificuldades em conectar o frontend React ao backend, seja com .NET ou Node.js  
- Se tivesse mais tempo, resolveria os problemas de CORS, autenticação e comunicação entre as camadas  

## Desafios Encontrados  

1. **Migração de .NET Core para Node.js**  
   - Inicialmente tentei desenvolver o backend em **.NET Core + SQL Server**, mas enfrentei problemas de configuração e tempo limitado para resolver dependências.  
   - Decidi migrar para **Node.js** para agilizar o desenvolvimento, mas ainda assim não consegui finalizar a integração com o frontend.  

2. **Problemas de Comunicação API-Frontend**  
   - Dificuldades com **CORS** e configuração correta dos headers.  
   - Erros na serialização dos dados entre React e a API.  
   - Falta de tempo para implementar tratamento de erros adequado.  

3. **Próximos Passos (Se Tivesse Mais Tempo)**  
   - Finalizar a conexão entre React e Node.js (.NET seria ideal se possível).  
   - Implementar validações mais robustas nos formulários.  
   - Adicionar filtros (por habitat, espécie, etc.) e relatórios estatísticos.  
   - Melhorar a autenticação e segurança da API.  

## Tecnologias Utilizadas  

### Frontend  
- **React** (Vite)  
- **Javascript** 
- **Axios**   
- **CSS Modules / Styled Components**   

### Backend (Node.js)  
- **Express.js**  
- **Sequelize**
- **SQLite**
- 
## Como Executar o Projeto  

1. **Frontend (React)**  
   ```bash  
   cd frontend  
   npm install  
   npm start  
   ```  

2. **Backend (Node.js)**  
   ```bash  
   cd backend  
   npm install  
   npm run dev  
   ```  

*Observação:* A integração entre frontend e backend ainda não está 100% funcional. Se tivesse mais tempo, priorizaria corrigir os problemas de comunicação. 
