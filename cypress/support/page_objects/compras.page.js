import { faker } from '@faker-js/faker/locale/pt_BR'
class comprasPage {

    acessarProdutos(){
        //Acesso a tela de produtos através do botão "Comprar", confirmação da aba da tela
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2)').should('contain', 'Produtos')
        
    }

    filtrarProdutos(){
        //Listar produtos de acordo com a ordenação (Método select)
        cy.get('[name="orderby"]').select('Ordenar por preço: maior para menor')
        cy.get('.woof_remove_ppi').should('contain', 'price high to low')
        
    }

    // Deixei essas funções aqui para abranger toda a matéria e incluir a possibilidade de usar fixtures
    // buscarProduto(nomeProduto) {
    //     cy.get('[name="s"]').eq(1).type(nomeProduto)
    //     cy.get('.button-search').eq(1).click()

    // }

    // addProdutoCarrinho(tamanho, cor, quantidade) {
    //     cy.get('.button-variable-item-' + tamanho).click()
    //     cy.get(`.button-variable-item-${cor}`).click()
    //     cy.get('.input-text').clear().type(quantidade)
    //     cy.get('.single_add_to_cart_button').click()
        
    // }

    selecionarProdutos(){
        //Selecionar produtos usando a regra de seletores dentro de uma lista "pai" mas escolhenado de forma aleatória para maior realidade
        const randomIndex = Math.floor(Math.random() * 9)
        cy.get('.products.products-grid .row').first().children().eq(randomIndex).click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    }


    addCarrinho() {
        // Selecionar um tamanho e cor aleatoriamente analisando antes quantas opções, a quantidade ficou definida 2
        cy.get('.variable-items-wrapper[data-attribute_name="attribute_size"] > li').then($tamanho => {
          const tamanhoContagem = $tamanho.length;
          const tamanhoAleatorio = Math.floor(Math.random() * tamanhoContagem);
          cy.wrap($tamanho).eq(tamanhoAleatorio).click();
        });
      
        cy.get('.variable-items-wrapper[data-attribute_name="attribute_color"] > li').then($cor => {
          const corContagem = $cor.length;
          const corAleatoria = Math.floor(Math.random() * corContagem);
          cy.wrap($cor).eq(corAleatoria).click();
        });
      
        cy.get('body').then($body => {
          if ($body.find('.stock.out-of-stock').length) {
            // Produto fora de estoque, voltar e tentar novamente
            cy.go(-2);
          } else {
            // Produto em estoque, continuar com o processo
            cy.get('[name="quantity"]').clear().type(2); // Define a quantidade
            cy.get('.single_add_to_cart_button').click();
            cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.');
            cy.go(-2);
          }
        });
      }
      

    checkout(){
        //Selecionar botões de forma simples com click para ir pra tela de cadastro
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()       
        cy.get('thead > tr > .product-name').should('contain', 'Produto')
    }

    dadosConta() {
        //Resolvi colocar dentro de uma função para a apresentação ficar mais elegante (É uma prática comum?)
        cy.cadastro(
                    faker.person.firstName(),
                    faker.person.lastName(),
                    faker.location.street(),
                    faker.location.city(),
                    faker.location.zipCode(),
                    faker.phone.number(),
                    faker.internet.email(),
                    faker.internet.password()
                )
            }

    finalizarCompra(){
        //Etapas para finalizar a compra e verificar o sucesso
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait(2000)
        cy.get('.page-title').should('contain', 'Pedido recebido')
    }

    

}

export default new comprasPage()




