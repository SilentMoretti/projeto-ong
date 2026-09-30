Templates JavaScript

Apresentação

Projeto desenvolvido para praticar conceitos de desenvolvimento web com JavaScript. A aplicação permite cadastrar nomes, exibir os registros na página e armazenar os dados no navegador.

Tecnologias utilizadas

HTML5
CSS3
JavaScript ES6
DOM
LocalStorage
ES6 Modules (import e export)

Estrutura do projeto

Projeto ONG/
├── README.md
├── css/
│   └── estilo.css
├── html/
│   └── index.html
└── js/
    ├── armazenamento.js
    ├── eventos.js
    └── script.js

Pré-requisitos

Para executar o projeto, é necessário ter:

Um navegador web atualizado.
Visual Studio Code.
Extensão Live Server para executar o projeto localmente.

O projeto não possui dependências externas ou processo de build.

Como executar

Abra a pasta do projeto no Visual Studio Code.
Abra o arquivo html/index.html.
Clique com o botão direito no arquivo.
Selecione Open with Live Server.
O projeto será aberto no navegador.

Funcionalidades

Exibição da lista de pessoas cadastradas.
Cadastro de novos nomes.
Validação de campo vazio.
Mensagens de interação com o usuário.
Armazenamento dos nomes utilizando localStorage.
Organização do JavaScript em módulos.

Acessibilidade

Foram realizadas melhorias de acessibilidade no formulário e na lista de pessoas, incluindo a associação entre label e input e o uso de aria-live para auxiliar usuários de leitores de tela.

Versionamento

O projeto utiliza Git e GitHub para controle de versão, seguindo uma organização baseada no GitFlow, com as branches main, develop e feature/.

Testes

Os testes foram realizados diretamente no navegador, verificando o funcionamento dos botões, formulário, cadastro de nomes, mensagens e armazenamento dos dados após a atualização da página.