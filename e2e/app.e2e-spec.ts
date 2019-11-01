import { CDMPage } from './app.po';

describe('CDM App', function() {
  let page: CDMPage;

  beforeEach(() => {
    page = new CDMPage();
  });

  it('should display footer containing creativeLabs', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('creativeLabs');
  });
});
