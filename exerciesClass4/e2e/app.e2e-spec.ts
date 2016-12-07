import { ExerciesClass4Page } from './app.po';

describe('exercies-class4 App', function() {
  let page: ExerciesClass4Page;

  beforeEach(() => {
    page = new ExerciesClass4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
