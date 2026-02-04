describe('Scénario d\'inscription', () => {
  it('doit permettre de créer un compte avec succès sur mon application', () => {
    // 1. Visiter l'application
    cy.visit('http://localhost:5173')

    // 2. Cliquer sur le bouton Inscription pour afficher le formulaire
    cy.contains('Inscription').click()

    // 3. Remplir le formulaire (Cypress attendra que les champs apparaissent)
    cy.get('input[name="email"]').type('test_cypress@example.com')
    cy.get('input[name="password"]').type('MotDePasseSecurise123')

    // 4. Cliquer sur le bouton de soumission
    cy.get('button[type="submit"]').click()

    // 5. Vérifier que l'inscription a réussi
    cy.contains('Compte créé avec succès').should('be.visible')
  })
})
