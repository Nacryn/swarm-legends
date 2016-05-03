describe('App', () => {

  beforeEach( () => {
      browser.get('');
  });

  it('should have a title', () => {
      expect(browser.getTitle()).toEqual('My Angular2 App');
  });

  it('should have <nav>', () => {
      expect(element(by.css('swarm-app nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
      expect(element(by.css('swarm-app nav a:first-child')).getText()).toEqual('Dashboard');
  });

  it('should have correct nav text for About', () => {
      expect(element(by.css('swarm-app nav a:last-child')).getText()).toEqual('Scene');
  });

});
