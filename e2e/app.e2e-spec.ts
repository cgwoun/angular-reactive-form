import { AngularReactiveFormPage } from './app.po';

describe('angular-reactive-form App', () => {
  let page: AngularReactiveFormPage;

  beforeEach(() => {
    page = new AngularReactiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
