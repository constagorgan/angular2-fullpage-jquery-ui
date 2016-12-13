import { AngularResponsiveTestAppPage } from './app.po';

describe('angular-responsive-test-app App', function() {
  let page: AngularResponsiveTestAppPage;

  beforeEach(() => {
    page = new AngularResponsiveTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
