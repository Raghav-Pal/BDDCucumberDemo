import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('user is on login page', function(){
    cy.visit('https://trytestingthis.netlify.app/')
})

When('user enters username and password', function(){
    cy.get('#uname').clear().type('test')
    cy.get('#pwd').clear().type('test')
})

And('clicks on login butoon', function(){
    cy.get('[type="submit"]').click()
})

Then('user is navigated to the homepage', function(){
    cy.contains('Login Successful')
})

