describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('1. put correct PLACE command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('PLACE (0, 0, \'NORTH\')');
    });
  })

  it('2. put correct MOVE command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .type('MOVE')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('MOVE');
    });
  })

  it('3. put correct LEFT command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .type('LEFT')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('LEFT');
    });
  })

  it('4. put correct RIGHT command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .type('RIGHT')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('RIGHT');
    });
  })

  it('5. put correct REPORT command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .type('REPORT')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('REPORT( ) => OUTPUT: 0, 0, NORTH');
    });
  })
})