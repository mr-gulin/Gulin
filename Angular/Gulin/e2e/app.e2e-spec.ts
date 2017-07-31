import { GulinPage } from './app.po';

describe('gulin App', () => {
  let page: GulinPage;

  beforeEach(() => {
    page = new GulinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
