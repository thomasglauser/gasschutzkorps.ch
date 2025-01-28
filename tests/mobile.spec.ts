// @ts-check

import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 854,
        width: 384,
    },
});

test('mobile', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.getByRole('button', { name: 'Mobile Menu' }).click();

    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Vorstand' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Anlässe' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Geschichte' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Veteranen' })).toBeVisible();
    await expect(
        page.locator('#navbarCollapse').getByRole('link', { name: 'Kontakt' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Vorstand' }).click();

    await expect(page.getByRole('link', { name: 'Home' })).toBeHidden();
});
