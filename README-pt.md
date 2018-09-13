# Framework FED

Este é o framework utilizado para desenvolvimento rápido de LPs (Landing Pages) ou SPAs (Single-Page Applications).
Utilizando de praticas como o carregamento protelado do CSS e do JS para melhorar o carregamento da página e a experiência do Usuário

### Tecnologias Usadas / Métodos Aplicados
- [Pug](https://pugjs.org/) (Pré-Processador de HTML)
- [Stylus](http://stylus-lang.com/) (Pré-processador de CSS)
- [Normalize.css](https://necolas.github.io/normalize.css/) (CSS Reset)

> Em caso de dúvida com o uso das bibliotecas, consultar a documentação
> indicada no link dos mesmos.

### Preparando o Ambiente

Pré-requisitos:
* [Node.JS](https://nodejs.org/en/)

Clone o projeto. Depois entre na pasta e use o comando `npm install` para instalar as dependencias necessárias.

### Como utilizar o Gulp

Comandos

`gulp`
- Comando padrão. Compila os arquivos, gera o build, inicia o *watch* e o *webserver*

`gulp css`
- Compila os arquivos *.styl* em CSS

`gulp views`
- Compila os arquivos *.pug* em HTML

`gulp scripts`
- Compila e minifica os arquivos JS

### Estrutura de Pastas
```
+-- resources
|   +-- scripts                 // Scripts
|   |   +-- plugins             // Utilize esta pasta para os plugins (como VueJS, Slick ou Selectric)
|   |   main.js                 // Seu script principal
|
|   +-- stylus                  // Estilos (CSS)
|   |   +-- inline              // CSS que serão incluidos inline (primeira dobra)
|   |   +-- plugins             // CSS de plugins como Slick ou Selectric
|   |   +-- sections            // CSS das sessões da página (header, popups)
|   |   _fonts.styl             // @font-faces
|   |   _keyframes.styl         // Keyframes para animaçoes
|   |   _variables.styl         // Variaveis e Mixins
|   |   main.styl               // Importa todos os outros, e estilos comuns                    
|
|   +-- views
|   |   +-- includes            // Arquivos que serão repetidos entre as páginas
|   |   |   head.pug            // Tag <head> com metatags css entre outros
|   |   |   css.pug             // Chamadas do CSS
|   |   |   loader.pug          // Loader inicial da página
|   |   |   s-LoadCSS.js        // Fallback para o carregamento assincrono do CSS
|   |   |   s-preload-poly.min  // Fallback para o carregamento assincrono do CSS
|
|   |   +-- sections            // Sessoes da página (header,footer,...)
|
|   |   +-- svgs                // Arquivos para uso de SVG Inline
|
+-- app                         // Arquivos para visualização
|   *.html
|   +-- css
|   +-- js
|   +-- MailerPHP               // Arquivos para o envio de email em PHP
|   +-- mail                    
|   |   mail.php                // PHP com o texto para o envio do email
|   +-- (images/videos/fonts)
```

> Não esqueça de atualizar o `package.json` com os dados do projeto :) 