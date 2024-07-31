/// <reference types="cypress" />
import comprasPage from "../support/page_objects/compras.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    comprasPage.acessarProdutos()
    comprasPage.filtrarProdutos()
    for (let i = 0; i < 4; i++) { 
      comprasPage.selecionarProdutos()
      comprasPage.addCarrinho()
    }
    comprasPage.checkout()
    comprasPage.dadosConta()
    comprasPage.finalizarCompra()

  })


})