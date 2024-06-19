/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.amazon.com/')
  })

  it('adcionando itens ao carrinho', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
      cy.get('#twotabsearchtextbox').type('Placa Mãe Asus Prime A520m-a Ii Am4 Matx Ddr4');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B0997CGDLQ"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#twotabsearchtextbox').type('ryzen 5');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B08166SLDF"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#twotabsearchtextbox').type('gtx 1080ti');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B06Y15DWXR"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#twotabsearchtextbox').type('memória ram kingston fury beast 8gb');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B0BRTKL725"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#a-autoid-0-announce').click();
      cy.get('#quantity_1').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#twotabsearchtextbox').type('fonte corsair real atx 600w');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B0BYR1BXC6"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#twotabsearchtextbox').type('gabinete gamer');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-asin="B0CP7SQ58Z"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-logo-sprites').click();
      cy.get('#nav-cart').click();
    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
  })

  // it('adcionando periféricos ao carrinho', () => {

  //   cy.get('#twotabsearchtextbox').type('razer blackwidow chroma v2');
  //   cy.get('#nav-search-submit-button').click();
  //   cy.get('[data-asin="B08FQPLCNC"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
  //   cy.get('#add-to-cart-button').click();
  //   cy.get('#twotabsearchtextbox').type('razer deathadder');
  //   cy.get('#nav-search-submit-button').click();
  //   cy.get('[data-asin="B01LXC1QL0"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
  //   cy.get('#add-to-cart-button').click();
  //   cy.get('#twotabsearchtextbox').type('monitor 144hz');
  //   cy.get('#nav-search-submit-button').click();
  //   cy.get('[data-index="2"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').click();
  //   cy.get('#add-to-cart-button').click();
  // })
})
