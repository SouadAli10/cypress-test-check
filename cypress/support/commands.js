import forms from '../utils/forms';


//TODO extend this to a Page object model to handel different forms but it is not required at the moment 

Cypress.Commands.add('checkFormsInput', (form) => {
    cy.log('checkFormsInput');
    form.forEach((inputElement) => {
        cy.get(`[data-form-element=${inputElement.id}]`).should('exist');
    })
})

Cypress.Commands.add('getForms', (formName) => {
    cy.log('getForms');
    const form = forms()[formName]
    if (form) {
        return cy.wrap(form)
    }
    throw new Error(`form with name ${formName} does not exist`);
})

Cypress.Commands.add('checkInputFormErrors', (form, FieldsWithoutErrors = []) => {
    cy.log('checkInputFormErrors');
    var requiredFields = form.filter(field => field.required);
    if(FieldsWithoutErrors.length > 0) {
        requiredFields = requiredFields.filter(field => !FieldsWithoutErrors.includes(field.id));
    }
    FieldsWithoutErrors.forEach((noError) => {

        cy.get(`[data-form-element=${noError}]`).within((element) => {
            cy.get('.error-msg').should("not.have.text");
        });
    })
    requiredFields.forEach((inputElement) => {
        cy.get(`[data-form-element=${inputElement.id}]`).within((element) => {
            cy.get('.error-msg').contains(inputElement.error_message);
        });
    })
})
