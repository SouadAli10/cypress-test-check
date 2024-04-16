describe('Enquiry Form Flow', () => {
    before(() => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
    })
    it('Try to submit an enquiry', () => {
        cy.log('Navigate to the page');

        cy.visit('/');

        cy.log('Give Cookies Consent'); // move to a programmatic approach 

        cy.get('.global-header.no-transparent.active').should('exist');
        cy.get('#onetrust-banner-sdk').should('be.visible');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#onetrust-banner-sdk').should('not.be.visible');

        cy.log('Navigate to the page and validate url');

        cy.get('.cta_button').contains('Enquire').click();
        cy.url().should('include', '/en/enquiry');

        cy.log('Open the enquiry modal');

        cy.get('.enquire-landing__cta-container > .cta_button').contains('Enquire').click({ force: true });
        cy.get('.overlay.enquire2--overlay.enquire--new-form.top-scrolled.overlay--menu-opening').should('exist');

        cy.log('Start searching');

        cy.intercept({
            method: 'GET',
            url: 'https://www.bing.com/maps/instrumentation?q=&feature=sdk',
          }).as('bingMapLoad');
        cy.wait('@bingMapLoad');

        cy.get('#location-input')
            .type('Dubai, United Arab Emirates', { delay: 100 });

        cy.get('#location-input').click();
        cy.wait(200);
        cy.get('#location-input').click();
        cy.get('#as_containerSearch_location-input')
            .invoke('attr', 'style', 'visibility:visible');
        cy.get('.suggestLink > .as_suggestion_root_inside').first().click();

        cy.get('.row-result').should('have.length.greaterThan', 0);
        cy.get('.content-more > .address').contains('Dubai').should('exist');
        cy.get('.active > [data-action="open"] .content-more').click();
        cy.get('.row-result.active > [data-action="open"] > .col2 > .content-more > .ctas > .send-enquiry').click();

        cy.log('Specify a Model');

        cy.get('#Model').select('DBS');
        cy.get('#BodyStyle').select('DBS 770 Ultimate');
        cy.get('[data-name="Continue"]').click();

        cy.get('.step.active.step-valid > .name').contains('Contact details');

        cy.log('Attempt Form Submission without Data');

        var form = []
        cy.getForms('Enquiry Form').then(resp => {
            form = resp
        });
        cy.checkFormsInput(form);


        cy.checkInputFormErrors(form);

        cy.log('Add Email and Attempt Resubmission');
        cy.get('#Email').type('test@test.com');
        cy.get('[data-name="Submit"]').click();
        cy.checkInputFormErrors(form, ['Email']);

    })
})
