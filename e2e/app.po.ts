import { browser, element, by } from 'protractor';

export class IntelMvePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('intel-root h1')).getText();
  }
}
