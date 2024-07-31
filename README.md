# Testes End to End - Ebac Shop
### Exercício para os alunos de Qualidade de software da EBAC 

Ebac shop: http://lojaebac.ebaconline.art.br/

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/joaomatheusqa/EBAC-E2E
```
```
cd teste-e2e-ebac
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dashboard, selecione um dos navegadores (De preferencia Electron) e siga com as execuções. 


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

### OBSERVAÇÕES DO PROJETO ;) 
O código foi pensado tentando usar todos os métodos aprendidos no curso, é possível visualizar a existencia de duas funções que não são chamadas e um arquivo fixture, foi preferivel deixar documentado para idéia de que é possível realizar a mesma função com métodos diferentes.
O "for" no código principal foi uma alternativa para tratar a demanda do teste incluindo 4 produtos, mas fico aberto a sugestões de como abordar essa necessidade de forma mais elegante.

João Matheus de Quadros




