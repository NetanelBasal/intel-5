import { IntelMvePage } from './app.po';

describe('intel-mve App', () => {
  let page: IntelMvePage;

  beforeEach(() => {
    page = new IntelMvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('intel works!');
  });
});
