import { App } from '../App';

describe('Create address', () => {
    it('create local address', () => {
        cy.intercept('GET', '**/address-fields/local', {
            body: {
                street: { label: 'Street', requirement: 'MANDATORY' },
                postalCode: { label: 'Postal Code', requirement: 'OPTIONAL' },
                townName: { label: 'City', requirement: 'OPTIONAL' },
                country: {
                    label: 'Country',
                    requirement: 'MANDATORY',
                    // disabled: true,
                    value: 'AT',
                },
            },
        });
        cy.intercept('POST', '**/addresses').as('**/addresses');

        cy.mount(<App />, '/addresses');

        cy.findByLabelText('Type').should('have.value', 'local');

        cy.findByLabelText('Street').type('Am Belvedere');
        cy.findByLabelText('Postal Code').type('1100');
        cy.findByLabelText('City').type('Vienna');

        cy.findByLabelText('Country').should('have.value', 'AT'); //.and('be.disabled');

        cy.findByRole('button', { name: 'Save' }).click();

        cy.findByRole('alert').should('have.text', "It's now saved!").and('be.visible');
        cy.wait('@**/addresses')
            .its('request.body')
            .should(
                'be.equal',
                JSON.stringify({
                    street: 'Am Belvedere',
                    postalCode: '1100',
                    townName: 'Vienna',
                    country: 'AT',
                }),
            );
    });
});
