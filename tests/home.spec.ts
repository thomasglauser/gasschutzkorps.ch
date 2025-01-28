// @ts-check

import { test, expect } from '@playwright/test';

test('home', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(
        page.getByRole('link', { name: 'Gasschutzkorps', exact: true })
    ).toBeVisible();

    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Vorstand' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Anlässe' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Geschichte' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Veteranen' })).toBeVisible();

    await expect(page.locator('h1')).toContainText(
        'Willkommen auf der Vereinswebseite vom Gasschutzkorps!'
    );
    await expect(page.locator('body')).toContainText(
        'Unser Verein setzt sich aus aktiven und ehemaligen Feuerwehrleuten zusammen.'
    );
    await expect(page.locator('body')).toContainText(
        'Wir sind eine aktive und gesellige Gemeinschaft. Unser Vereinsjahr ist gespickt mit tollen Ausflügen, gemeinsamen Aktivitäten und Anlässen. Wenn wir auf unserer Vereinsreise unterwegs sind, erleben wir Kultur, Kulinarik und unsere Kameradschaft.'
    );
    await expect(page.locator('body')).toContainText(
        'Du hast Lust, unseren Verein kennenzulernen? Dann melde dich und schau beim nächsten Anlass vorbei!'
    );

    await expect(page.getByRole('contentinfo')).toContainText(
        'Gott zur Ehr, dem nächsten zur Wehr.'
    );
});
