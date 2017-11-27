import { $, browser, ElementFinder } from 'protractor';
import { BasePagePo } from '../shared/pages/basePage.po';

export class GettingStartedPo extends BasePagePo {
  templateUrl = 'getting-started';
  pageUrl = (browser.baseUrl as string) + this.templateUrl;
  angularLogo: ElementFinder = $('[alt*="angular logo"]');
}
