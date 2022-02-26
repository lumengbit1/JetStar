describe('Correct commands', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. put correct PLACE command should display in the command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="command-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('PLACE (0, 0, \'NORTH\')');
    });
  });

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
  });

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
  });

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
  });

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
  });

  it('6. click run button will clean input element', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .should('have.value', '');
  });

  it('7. click reset button will clean input element and command list', () => {
    cy.get('input')
    .type('PLACE,0,0,NORTH')
    .get(`[aria-label="reset-button"]`)
    .click()
    .get('input')
    .should('have.value', '')
    .get(`[aria-label="command-list"]`)
    .should('not.exist');
  });
});

describe('Wrond command error message', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. put wrong PLACE command should display in the error list', () => {
    cy.get('input')
    .type('PLACE,0,0')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('Invalid PLACE command. The valid PLACE command should be \'PLACE X,Y,F\'.');
    });
  });

  it('2. put PLACE with wrong direction command should display in the error list', () => {
    cy.get('input')
    .type('PLACE,0,0,TEST')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('Invalid facing direction value. Available directions should be NORTH | EAST | SOUTH | WEST.');
    });
  });

  it('3. put wrong MOVE command should display in the error list', () => {
    cy.get('input')
    .type('MOVE')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('The robot is not placed on the table yet. Place it first with \'PLACE X,Y,F\'');
    });
  });

  it('4. put wrong command should display in the error list', () => {
    cy.get('input')
    .type('TEST')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('Invalid command. Please pick commands from PLACE | MOVE | LEFT | RIGHT | REPORT.');
    });
  });

  it('5. put invalid coordinate with PLACE command should display in the error list', () => {
    cy.get('input')
    .type('PLACE,-1,0,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('Invalid coordinate value. It must be non-negative interger.');
    });
  });

  it('6. robot fall off from table should display in the error list', () => {
    cy.get('input')
    .type('PLACE,4,4,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get('input')
    .type('MOVE')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('The robot can\'t move forward on that direction, it may fall off the table.');
    });
  });

  it('7. place robot out of the table should display in the error list', () => {
    cy.get('input')
    .type('PLACE,5,4,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('The robot fall off from the table.');
    });
  });

  it('8. click reset button will clean error list', () => {
    cy.get('input')
    .type('PLACE,5,4,NORTH')
    .get(`[aria-label="run-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should(($ele)=>{
      expect($ele).to.contain('The robot fall off from the table.');
    })
    .get(`[aria-label="reset-button"]`)
    .click()
    .get(`[aria-label="error-list"]`)
    .should('not.exist');
  });
});