describe('check function clean', () => {
    it('should clean field', () => {
        cy.visit('https://demo.realworld.io/#/');
        cy.get('app-header ul[show-authed=false]').as('header');
        cy.get('@header').find('li:nth-child(2)')
            .click();
        cy.get('form[ng-submit="$ctrl.submitForm()"]').as('submit');
        cy.get('@submit').find('input[type=email]')
            .click()
            .type('test_anton@gmail.com')
            .clear()
            .type('test_anton@gmail.com');
        cy.get('@submit').find('input[type=password]')
            .click()
            .type('xyzXYZ123_')
            .clear()
            .type('xyzXYZ123_');
        cy.get('@submit').find('button[type=submit]')
            .click();
        cy.get('app-header ul[show-authed="true"] li:nth-child(2)')
            .click();
        cy.get('fieldset[ng-disabled="$ctrl.isSubmitting"]').as('fieldset');
        cy.get('@fieldset').find('input[ng-model="$ctrl.article.title"]')
            .click()
            .type('title')
            .clear()
            .type('title');
        cy.get('@fieldset').find('input[ng-model="$ctrl.article.description"]')
            .click()
            .type('description')
            .clear()
            .type('description');
        cy.get('@fieldset').find('textarea[ng-model="$ctrl.article.body"]')
            .click()
            .type('some text')
            .clear()
            .type('some text');
        cy.get('@fieldset').find('input[ng-model="$ctrl.tagField"]')
            .click()
            .type('some tag')
            .clear()
            .type('some tag');
        cy.get('@fieldset').find('button[type="button"]')
            .click();
    })
})