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

    await page.getByRole('banner').getByRole('button').click();

    await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Vorstand' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Anlässe' })).toBeVisible();

    await expect(
        page.getByRole('button', { name: 'Geschichte' })
    ).toBeVisible();

    await expect(page.getByRole('button', { name: 'Veteranen' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Kontakt' })).toBeVisible();

    await page.getByRole('button', { name: 'Vorstand' }).click();
    await expect(page.getByRole('button', { name: 'Home' })).toBeHidden();
});
