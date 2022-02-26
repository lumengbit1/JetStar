describe('The Home Page', () => {
  it('1. put correct PLACE command should display in the command list', () => {
    cy.visit('/');

    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('PLACE (0, 0, \'NORTH\')');
    });
  })
})