describe('editable', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=textcomponent--primary&knob-backgroundColor=red&knob-dataStatus=saved&knob-textValue=hello'
    )
  );

  it('should render the component with the word "hello"', () => {
    cy.get('editable-text').should('exist').should('contain', 'bye');
  });
});
