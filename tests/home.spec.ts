// @ts-check

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveScreenshot();

    await expect(page.locator('body')).toContainText(
        'Unser Verein setzt sich aus aktiven und ehemaligen Feuerwehrleuten zusammen.'
    );
    await expect(page.locator('body')).toContainText(
        'Wir sind eine aktive und gesellige Gemeinschaft. Unser Vereinsjahr ist gespickt mit tollen Ausflügen, gemeinsamen Aktivitäten und Anlässen. Wenn wir auf unserer Vereinsreise unterwegs sind, erleben wir Kultur, Kulinarik und unsere Kameradschaft.'
    );
});
