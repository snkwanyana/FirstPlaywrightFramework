# firstFramework

A Playwright-based test automation framework for the Ndosi Simplified Automation website.

Status: Work in progress

## Overview
This project uses Playwright with TypeScript to automate basic end-to-end checks against the website configured in the Playwright setup.

### Current setup
- Test runner: Playwright
- Language: TypeScript
- Base URL: https://ndosisimplifiedautomation.vercel.app/
- Browser projects configured in Playwright:
  - Chromium
  - Firefox
  - WebKit

## Project structure
- tests/
  - home.test.ts: home page navigation and content checks
  - hooks.spec.ts: basic navigation and button checks
  - ndosi.test.ts: direct test examples using the target URL
  - readURLFromConfig.test.ts: tests that use the configured base URL
- src/pages/
  - HomePage.ts: page object model for the home page interactions
  - ConnectPage.ts: page object model for the connect/enrolment page assertions
- playwright.config.ts: Playwright configuration and browser setup
- package.json: project metadata and dependencies

## Installation
Run the following commands from the project root:

```bash
npm install
npx playwright install
```

## Running tests
Examples:

```bash
npx playwright test
npx playwright test tests/hooks.spec.ts --headed
```

## Current test coverage
The suite currently checks:
- Launching the site and verifying the page title
- Confirming that the "Start Learning Today" button is visible and has the expected text
- Navigating to the About Us section and verifying the heading
- Using page object classes to structure repeated UI interactions

## Notes
This README is still being expanded as the framework evolves. More details, fixtures, reusable helpers, and additional test scenarios will be added over time.
