# Projeto de Testes Automatizados com Playwright 🚀

Este projeto contém um teste automatizado utilizando o framework **Playwright**. O objetivo é preencher e salvar uma nota no site [Anotepad](https://pt.anotepad.com), verificando o comportamento esperado.

---

## **Pré-requisitos**

Certifique-se de que você possui os seguintes itens instalados antes de começar:

1. **Node.js** (versão 16 ou superior) - [Download Node.js](https://nodejs.org/)
2. **npm** (gerenciador de pacotes do Node.js, instalado junto com o Node.js)
3. **Git** (para clonar o repositório) - [Download Git](https://git-scm.com/)

---

## **Passos para configurar o projeto**

1. **Clone o repositório**  
   Abra o terminal e execute o seguinte comando:  
   `git clone <URL_DO_REPOSITORIO>`  
   Substitua `<URL_DO_REPOSITORIO>` pela URL do repositório correspondente.

2. **Acesse a pasta do projeto**  
   Navegue até o diretório do projeto recém-clonado:  
   `cd <nome-da-pasta-do-projeto>`

3. **Instale as dependências do projeto**  
   Execute o comando a seguir no diretório do projeto para instalar as dependências necessárias:  
   `npm install`

4. **Instale os navegadores do Playwright**  
   O Playwright requer a instalação dos navegadores que serão utilizados nos testes. Para isso, execute:  
   `npx playwright install`

---

## **Como rodar os testes**

1. **Comando para executar todos os testes**  
   Para executar todos os testes automatizados, utilize:  
   `npx playwright test`

2. **Executar um teste específico**  
   Para executar apenas um teste específico, como o que preenche e salva a nota, utilize o seguinte comando:  
   `npx playwright test tests/anotepad-test.spec.ts`

3. **Gerar relatório de resultados**  
   Para gerar e visualizar um relatório detalhado dos testes executados:  
   `npx playwright show-report`

---

## **Estrutura do Projeto**

- **tests/anotepad-test.spec.ts**: Contém o teste principal que preenche e salva uma nota no Anotepad.
- **util/Util.ts**: Contém funções auxiliares, como normalização de texto e preenchimento de inputs.
- **playwright.config.ts**: Configuração do Playwright, incluindo timeout e diretórios de relatórios.

---

## **Recomendações**

1. **Executar os testes em navegadores diferentes**  
   Por padrão, o Playwright executa os testes no **Chromium**. Você pode rodar os testes em navegadores diferentes utilizando os seguintes comandos:  
   `npx playwright test --project=firefox`  
   `npx playwright test --project=webkit`

2. **Depurar testes**  
   Para depurar os testes, utilize o modo `headed` (com a interface gráfica do navegador):  
   `npx playwright test --headed`

3. **Executar testes no modo interativo**  
   Para rodar os testes no modo interativo com uma interface gráfica:  
   `npx playwright test --ui`

---

## **Solução de Problemas**

1. **Erro de Timeout nos Testes**  
   Se ocorrer um erro de timeout, aumente o tempo limite utilizando:  
   `npx playwright test --timeout=60000`

2. **Erro de Navegadores Não Encontrados**  
   Certifique-se de que os navegadores foram instalados com o comando:  
   `npx playwright install`

---

## **Referências**

- [Documentação Oficial do Playwright](https://playwright.dev/)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)

---

Se precisar de ajuda, entre em contato com o desenvolvedor ou consulte as referências acima! 😊
