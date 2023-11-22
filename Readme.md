# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto Mais Amor SP

## Integrantes:
- Nathan Camargo 
- Pedro Henrique Moreira
- Pedro Henrique Araújo
- Felipe Ribeiro
- Matheus Samapaio

## Professores Orientadores:
 <a href="https://www.linkedin.com/in/adriano-valente-534576135/">Adriano Felix Valente</a> <br>
 <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a> <br>

## Descrição

O Projeto Mais Amor SP é um site desenvolvido para a ONG Mais Amor SP, com o objetivo de promover suas atividades, captar doações e voluntários, e aumentar a visibilidade de suas ações sociais. Utilizando tecnologias modernas de desenvolvimento web, o site oferece uma experiência interativa e informativa para os visitantes.

### Objetivos:

- Promover as atividades da ONG Mais Amor SP.
- Captar doações e voluntários.
- Aumentar a visibilidade das ações sociais da ONG.

### Resumo do Projeto:

O projeto foi desenvolvido utilizando React, uma biblioteca JavaScript para a construção de interfaces de usuário, junto com várias outras tecnologias e ferramentas modernas.

### UX/UI Design

- Design responsivo e estilização dos componentes utilizando Bootstrap & React-Bootstrap.
- Gerenciamento de rotas na aplicação com React Router Dom.
- Animações de scroll com AOS (Animate On Scroll).
- Ícones variados com React Icons.
- Efeitos de paralaxe em algumas seções do site com React Parallax.

#### Frontend

As dependências principais do frontend incluem:

- `aos`: Biblioteca para animações de scroll na página.
- `axios`: Cliente HTTP para fazer requisições a APIs.
- `bootstrap` & `react-bootstrap`: Para design responsivo e componentes estilizados.
- `react`: Biblioteca JavaScript para a construção de interfaces de usuário.
- `react-icons`: Para incluir ícones variados no projeto.
- `react-parallax`: Para efeitos de paralaxe em algumas seções do site.
- `react-router-dom`: Para gerenciamento de rotas no aplicativo React.
- `react-scripts`: Scripts e configurações utilizados pelo Create React App.
- `web-vitals`: Para reportar métricas de desempenho do site.

#### Backend

O backend do projeto utiliza as seguintes dependências principais:

- `@google-cloud/storage`: Para armazenar arquivos e imagens no Google Cloud Storage.
- `bcrypt`: Para hashing e verificação de senhas.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- `express`: Framework de aplicativo web para Node.js.
- `firebase-admin`: Para interagir com os serviços do Firebase como autenticação e banco de dados.
- `jsonwebtoken`: Para gerar e verificar tokens JWT para autenticação.
- `multer`: Middleware para manipulação de `multipart/form-data` para upload de arquivos.

## Recursos

- Página principal com informações sobre a ONG e suas atividades.
- Seção para captação de doações e voluntários.
- Seções promocionais para destacar eventos e ações sociais.
- Iniciativa S.O.N.H.O.S. que é basicamente um webapp dentro do site.

## 🛠 Estrutura de Pastas

### Frontend

A estrutura de pastas do projeto está organizada para separar claramente os componentes, páginas e estilos. Abaixo está a descrição detalhada dos diretórios e arquivos principais:

- `node_modules`: Contém todas as bibliotecas e dependências do projeto.
- `public`: Armazena os arquivos estáticos como HTML base, ícones, e manifest.
- `src`: Diretório principal do código-fonte.
  - `components`: Contém subdiretórios para cada componente reutilizável:
    - `Divider`: Componentes que criam divisões visuais entre seções do site.
    - `Intro`: Componentes que compõem a introdução ou cabeçalho do site.
    - `Navbar`: Componentes da barra de navegação.
  - `pages`: Contém subdiretórios para as diferentes páginas do site:
    - `Contato`: Página de contato para interações com os usuários.
    - `Contribua`: Página que permite contribuições ou doações.
    - `SONHOS`: Página que pode estar relacionada a pedidos ou desejos específicos dos usuários.
    - `Home`: Página inicial do site.
    - `Projetos`: Página que detalha os projetos em andamento ou concluídos.
    - `Sobre`: Página sobre a ONG e suas missões.
  - `App.css`: Arquivo de estilo CSS global para o aplicativo.
  - `App.js`: O componente raiz React que engloba todos os outros componentes.
  - `App.test.js`: Arquivo de testes para o componente App.
  - `index.css`: Estilos CSS globais que afetam todo o site.
  - `index.js`: Ponto de entrada JavaScript que renderiza o aplicativo React no DOM.
  - `logo.svg`: Arquivo de imagem vetorial usado como logotipo no site.
  - `reportWebVitals.js`: Arquivo para reportar métricas de desempenho do site.
  - `setupTests.js`: Configurações iniciais para a execução de testes.
- `.gitignore`: Arquivo que especifica arquivos não rastreados pelo Git.
- `package-lock.json`: Arquivo de bloqueio que lista as versões exatas das dependências instaladas.
- `package.json`: Arquivo de configuração que inclui scripts de construção e dependências do projeto.
- `README.md`: Arquivo Markdown com informações sobre o projeto, como instalação, uso e documentação.

### Backend

A estrutura de pastas para o backend do projeto segue uma organização lógica e modular, facilitando a manutenção e a escalabilidade. Aqui está a expansão da estrutura com base no que foi fornecido:

- `src`: Diretório principal do código-fonte para o backend.
  - `config`: Arquivos de configuração centralizados para o aplicativo backend.
  - `controllers`: Contém os controladores que gerenciam a lógica de entrada das rotas.
  - `models`: Definições de modelos para a camada de acesso a dados.
  - `routes`: Definições de rotas para a API, organizando os endpoints.
  - `security`: Implementações relacionadas à segurança, como autenticação e autorização.
  - `server.js`: Arquivo principal que inicia o servidor e carrega os middlewares.
  - `server.ts`: Versão TypeScript do arquivo principal do servidor.
  - `uploadTest.js`: Scripts para testar a funcionalidade de upload de arquivos.
