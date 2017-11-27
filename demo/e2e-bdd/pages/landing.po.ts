import { $, browser, ElementFinder } from 'protractor';
import { BasePagePo } from '../shared/pages/basePage.po';


export class LandingPo extends BasePagePo {
  pageUrl = browser.baseUrl;
  githubRepoUrl = 'https://github.com/valor-software/ngx-bootstrap';
  getStartedBtn: ElementFinder = $('.btn-primary');
  githubBtn: ElementFinder = $('.btn-outline-secondary');
}
