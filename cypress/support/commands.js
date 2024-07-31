Cypress.Commands.add('cadastro' , (nome, sobrenome, endereco, cidade, cep, telefone, email, senha) => {
    cy.get('#createaccount').click()
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#account_password').type(senha)
})

