import { AngularSearchProjectPage } from './app.po';

describe('angular-search-project App', () => {
  let page: AngularSearchProjectPage;

  beforeEach(() => {
    page = new AngularSearchProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
