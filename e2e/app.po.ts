import { browser, element, by } from 'protractor';

export class MeatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ap-root h1')).getText();
  }
}