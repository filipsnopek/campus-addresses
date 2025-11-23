import { App } from '../App';

describe('Booting the app', () => {
    it('successfully boots the app', () => {
        cy.intercept('GET', '**/address-fields/local', { body: {} });

        cy.mount(<App />, '/');

        cy.findByRole('link', { name: 'Campus Addresses' }).click();

        cy.findByRole('heading', { name: 'Campus Addresses' }).should('be.visible');
    });
});
