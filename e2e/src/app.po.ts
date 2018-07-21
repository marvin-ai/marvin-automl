import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(headerElement) {
    return element(by.css('app-root ' + headerElement)).getText();
  }
}
