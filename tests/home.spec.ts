// @ts-check

import { test, expect } from '@playwright/test';

test('home', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page.getByRole('link', { name: 'Logo' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Vorstand' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Anlässe' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Geschichte' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Veteranen' })).toBeVisible();

    await expect(
        page.getByRole('heading', { name: 'Willkommen auf der' })
    ).toBeVisible();

    await expect(page.getByText('Unser Verein setzt sich aus')).toBeVisible();

    await expect(page.getByText('Wir sind eine aktive und')).toBeVisible();

    await expect(page.getByText('Du hast Lust, unseren Verein')).toBeVisible();

    await expect(page.getByText('Gott zur Ehr, dem nächsten')).toBeVisible();
});
