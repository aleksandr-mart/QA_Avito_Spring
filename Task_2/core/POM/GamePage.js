export class GamePage {
  constructor(page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Game Page' });
    this.nameGame = page.locator('h2');
  };
};
