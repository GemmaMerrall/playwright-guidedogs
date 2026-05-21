export class NamePuppyPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.guidedogs.org.uk/how-you-can-help/fundraise/name-a-puppy/name-a-puppy-registration/';
    this.namingDropdown = page.getByLabel('How would you like to Name a');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async goto() {
    await this.page.goto(this.url);
  }
}