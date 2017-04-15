import { MaterialCliStarterPage } from './app.po';

describe('material-cli-starter App', () => {
  let page: MaterialCliStarterPage;

  beforeEach(() => {
    page = new MaterialCliStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
