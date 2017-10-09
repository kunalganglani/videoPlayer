import { CardCompPage } from './app.po';

describe('card-comp App', function() {
  let page: CardCompPage;

  beforeEach(() => {
    page = new CardCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
