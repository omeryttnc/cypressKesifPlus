/// <reference types="cypress" />
describe('ilk testlerimiz grup',()=>{

    it('test 1',()=>{

        cy.viewport('macbook-16')
        cy.visit('https://test.urbanicfarm.com/')
        cy.url().should('equal','https://test.urbanicfarm.com/')

        cy.get('.section-2_title__1fvm').should('be.visible')
        

    })
})