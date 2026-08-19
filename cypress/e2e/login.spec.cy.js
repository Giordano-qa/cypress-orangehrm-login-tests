describe('Orange HRM Tests', () => {
  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  it('login-Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('test')
    cy.get('input[name="password"]').type('test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials')
  })
})