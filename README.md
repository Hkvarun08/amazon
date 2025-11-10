# Amazon WebdriverIO Test

A simple WebdriverIO test script in TypeScript that opens Amazon homepage and verifies the search bar is visible.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Chrome browser installed
- ChromeDriver (included in dependencies, but ensure it's accessible in PATH or the script will use the installed version)

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Test

```bash

npm test
```

Or directly with ts-node:
```bash
npx ts-node amazon-test.ts
```

## What the Test Does

1. Opens Chrome browser using WebdriverIO
2. Navigates to Amazon homepage (https://www.amazon.com)
3. Verifies that the search bar is visible
4. Displays the search bar placeholder text
5. Closes the browser session

## File Structure

- `amazon-test.ts` - Main test file containing all the test logic
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

