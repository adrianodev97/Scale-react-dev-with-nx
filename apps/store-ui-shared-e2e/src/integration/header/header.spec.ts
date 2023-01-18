describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&knob-title=Game Store'));

    it('should render the component', () => {
      cy.get('div').should('contain', 'Game');
    });
});
