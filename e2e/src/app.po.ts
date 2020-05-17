import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
<<<<<<< HEAD
    return element(by.css('app-root .content span')).getText() as Promise<string>;
=======
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
  }
}
