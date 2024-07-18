import { Locator } from '@playwright/test';

export class ProgressBarElement {
  readonly bar = this.root.locator('[role="progressbar"]');

  constructor(private root: Locator) {}
}
