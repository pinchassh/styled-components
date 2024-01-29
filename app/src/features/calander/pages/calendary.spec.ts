describe('Calendary Component', () => {
    it('should navigate to the correct page on date click', () => {
      cy.visit('/your-calendary-route');
  
      // Click on a date in the calendar
      cy.get('.fc-day').first().click();
  
      // Verify that the URL has changed to the expected route
      cy.url().should('include', '/Halachatimes/');
    });
  
    it('should handle event deletion', () => {
      cy.visit('/your-calendary-route');
  
      // Assuming there is an event to delete
      cy.get('.fc-event').first().click();
  
      // Confirm the deletion
      cy.on('window:confirm', () => true);
  
      // Verify that the event is removed
      cy.get('.fc-event').should('not.exist');
    });
  });
  