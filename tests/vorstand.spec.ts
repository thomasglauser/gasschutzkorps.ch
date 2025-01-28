// @ts-check

import { test, expect } from '@playwright/test';

const persons = [
    { id: 'mlimacher', name: 'Michael Limacher', role: 'Präsident' },
    { id: 'mschüle', name: 'Martina Schüle', role: 'Aktuarin' },
    { id: 'tglauser', name: 'Thomas Glauser', role: 'Beisitzer' },
    { id: 'mskupch', name: 'Markus Skupch', role: 'Beisitzer' },
    { id: 'rjenny', name: 'Roman Jenny', role: 'Kassier' },
];

test.describe('PersonGroup Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/vorstand');
    });

    test('should render all persons correctly', async ({ page }) => {
        for (const person of persons) {
            await expect(page.getByTestId(person.id)).toBeVisible();
        }
    });

    test('should show person details on hover (desktop)', async ({ page }) => {
        for (const person of persons) {
            const personCard = page.getByTestId(person.id);
            await personCard.hover();
            const overlay = page.locator(`text=${person.name}`);
            await expect(overlay).toBeVisible();
        }
    });

    test('should toggle person details on click (mobile)', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        for (const person of persons) {
            const personCard = page.getByTestId(person.id);
            await personCard.click();
            const overlay = page.locator(`text=${person.name}`);
            await expect(overlay).toBeVisible();
            await personCard.click();
            await expect(overlay).toBeHidden();
        }
    });
});
