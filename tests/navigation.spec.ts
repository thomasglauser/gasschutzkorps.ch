// @ts-check

import { test, expect } from '@playwright/test';

test('navigation', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.getByRole('link', { name: 'Vorstand' }).click();
    await expect(page.locator('section')).toContainText('Der Vorstand');

    await page.getByRole('link', { name: 'Anlässe' }).click();
    await expect(page.locator('section')).toContainText('Unsere Anlässe');

    await page.getByRole('link', { name: 'Geschichte' }).click();
    await expect(page.locator('section')).toContainText('Unsere Geschichte');

    await page.getByRole('link', { name: 'Veteranen' }).click();
    await expect(page.locator('section')).toContainText(
        'Gasschutz - Veteranen der FFZ'
    );
    await page.getByRole('link', { name: 'Kontakt' }).click();
    await expect(page.locator('body')).toContainText('Kontakt');

    await expect(page.locator('#contact-form')).toContainText(
        'Nachricht senden'
    );

    await page.getByRole('link', { name: 'Impressum' }).click();
    await expect(page.locator('section').first()).toContainText(
        'Verantwortlich für den Inhalt dieser Website:'
    );

    await page.getByRole('link', { name: 'Datenschutzerklärung' }).click();
    await expect(page.locator('section').first()).toContainText('2. Hosting:');

    await page
        .getByRole('link', { name: 'Gasschutzkorps', exact: true })
        .click();
    await expect(page.locator('h1')).toContainText(
        'Willkommen auf der Vereinswebseite vom Gasschutzkorps!'
    );
});
