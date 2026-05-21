export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.guidedogs.org.uk/';
    this.gettingSupportLink = page.getByRole('link', { name: 'Getting support' });
    this.searchBox = page.getByRole('textbox', { name: 'Search here' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async goto() {
    await this.page.goto(this.url);
  }
}