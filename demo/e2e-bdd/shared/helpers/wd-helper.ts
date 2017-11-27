import { browser, ElementFinder, ExpectedConditions as EC } from 'protractor';

const TIMEOUT = 5000;
let message: string;

export async function waitFor(condition: Function, optMessage?: string) {
  await browser.wait(condition, TIMEOUT, optMessage);
}

export async function waitForClickable(button: ElementFinder) {
  message = 'Waiting for clickable ';

  await waitFor(EC.elementToBeClickable(button), message + (button.locator() as string));
}

export async function waitForVisible(elem: ElementFinder) {
  message = 'Waiting for appearing element ';

  await waitFor(EC.visibilityOf(elem), message + (elem.locator() as string));
}

export async function waitForUrlContains(template: string) {
  message = 'Waiting for url containing template ';

  await waitFor(EC.urlContains(template), message + template);
}

export async function safeClick(button: ElementFinder) {
  await waitForClickable(button);

  await button.click();
}
