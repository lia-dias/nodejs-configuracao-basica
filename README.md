# Configurações básicas de projeto NodejS
Projeto com configurações básicas de um projeto nodejs, incluindo configurações lint, husky e testes automatizados.

## v0.0.1
Criado projeto, index.js com 'Hello World'e pacote `nodemon`.

## v.0.1.0
Incluído ESLint com configuções recomendadas e inseridas [configurações customizadas](https://github.com/lia-dias/nodejs-configuracao-basica/blob/main/config/lint/.eslintrc-base.yml)

## v.0.2.0
Incluído `husky` para verificações de ESLint no pré commit de arquivos. Outros hooks relacionados ao github podem ser verificados [aqui](https://git-scm.com/docs/githooks);

## v.0.2.1
Incluído `lint-staged` para observação de arquivos alterados e execução de verificação de lint no webhook de pré commit apenas nos arquivos que sofreram modificação. Essa verificação bloqueia a aprovação do commit caso algum erro de lint seja encontrado.