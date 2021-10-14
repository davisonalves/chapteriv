/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

//Mocha -> Test Runner
//     describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app');

        //Interagindo com campos do tipo input
        cy.get('input[name=firstName]').type(chance.first());
        cy.get('input[name=lastName]').type(chance.last());
        cy.get('textarea[name=adress]').type(chance.address());
        cy.get('input[name=emailAdress]').type(chance.email());

        //Interagindo com radio butons
        cy.get('input[value=n]').check();

        //Interagindo com checkbox
        cy.get('input[type=checkbox]').check('Netflix');
        cy.get('input[type=checkbox]').check('Dormir');

        //Interagindo com selects
        cy.get('select#countries').select('Dinamarca', { force: true });
        cy.get('select#years').select('2006', { force: true });
        cy.get('select#months').select('Janeiro', { force: true });
        cy.get('select#days').select('8', { force: true });

        cy.get('input#firstpassword').type('Alunos@2021');
        cy.get('input#secondpassword').type('Alunos@2021');

        //Interagindo com button
        cy.contains('Finalizar cadastro').click();

        //Espero que minha aplicação seja direcionada para a listagem
        cy.url().should('contain', 'listagem');


    });
});