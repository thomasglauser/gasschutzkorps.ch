import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Adjust if your tests are in a different directory
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],
    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
    webServer: {
        command: 'npm run build && npm start',
        url: 'http://localhost:3000',
        timeout: 120000,
        reuseExistingServer: !process.env.CI,
    },
});
