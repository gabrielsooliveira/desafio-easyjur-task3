# Projeto de Validação de ISBN-10 com Testes Unitários

Este projeto contém uma função JavaScript que valida números ISBN-10 e testes unitários escritos usando o Jasmine para verificar a funcionalidade da função.

## Requisitos

- **Node.js** e **npm** instalados no sistema.
- Testes unitários utilizando **Jasmine**.

## Configuração do Ambiente de Testes

### 1. Clonar o repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar Dependências

Antes de rodar os testes, certifique-se de que as dependências do projeto estão instaladas. Execute o seguinte comando para instalar o Jasmine e outras dependências:

```bash
npm install
```

### 3. Inicializar o Jasmine

Caso não tenha o Jasmine configurado, inicialize-o com o comando:

```bash
npx jasmine init
```

Isso criará uma estrutura básica de diretórios e arquivos de configuração para o Jasmine. Se o arquivo jasmine.json não for gerado na raiz, mova-o para lá.
### 4. Estrutura de Diretórios
A estrutura do projeto deve ser similar a esta:


```bash
seu-projeto/
├── src/
│   └── isbn.js        # Código da função de validação de ISBN-10
├── spec/
│   └── isbn.spec.js   # Testes unitários da função
├── jasmine.json       # Arquivo de configuração do Jasmine
├── package.json       # Gerenciamento de dependências
└── node_modules/      # Diretório das dependências instaladas
```
### 5. Escrevendo Testes Unitários

Os testes para a função isValidISBN10 estão localizados no arquivo spec/isbn.spec.js. Eles cobrem cenários como:

ISBN-10 válido.
ISBN-10 válido com hífens.
ISBN-10 inválido com tamanho incorreto.
ISBN-10 inválido com caracteres não numéricos.
ISBN-10 inválido com soma não divisível por 11.
Exemplo de um teste unitário:


```bash
describe("isValidISBN10", function() {
    it("deve retornar true para um ISBN-10 válido", function() {
        expect(isValidISBN10("0306406152")).toBe(true);
    });

    it("deve retornar false para um ISBN-10 inválido com caracteres não numéricos", function() {
        expect(isValidISBN10("03064061X2")).toBe(false);
    });
});

```

### 6. Executando os Testes
Para rodar os testes, utilize o seguinte comando:

```bash
npx jasmine
```
### 7. Resultado Esperado
Se tudo estiver configurado corretamente e os testes passarem, a saída será algo assim:
```bash
Randomized with seed 12345
Started
.....

5 specs, 0 failures
Finished in 0.01 seconds
Randomized with seed 12345 (jasmine --random=true --seed=12345)
```
### 8. Executando Testes com Detalhes

Caso queira mais detalhes sobre os testes executados, use o seguinte comando:
```bash
npx jasmine --config=jasmine.json --verbose
```