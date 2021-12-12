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

## v.0.3.0
Incluído `jest` para execução de testes automatizados. A chamada do `jest` utiliza o parâmetro `--findRelatedTests` associado ao `lint-estaged`e ao `hook`de pré commit do `husky`, para buscar os testes associados aos arquivos modificados, e o parâmetro `--bail` para terminar a execução dos testes e lançar um erro assim que a primeira falha é encontrada.
Foi adicionado também o script `test` no `package.json`.

## v.0.4.0
Incluído `commitizen` para padronização de commits. Atualmente utilizando o padrão `conventional-changelog` definido pelo Angular.