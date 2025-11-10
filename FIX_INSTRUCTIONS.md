# Fix for "missing script: test" Error

## Problem
The error occurs because the `package.json` file is missing the `"test"` script in the `"scripts"` section.

## Solution Steps:

### Step 1: Open package.json
On your friend's laptop, navigate to the project folder:
```
C:\Users\jrajvyo\Downloads\amazon-develop
```

Open `package.json` in a text editor (VS Code, Notepad++, etc.)

### Step 2: Check if "scripts" section exists
Look for a section that says `"scripts":`. 

**If the "scripts" section is missing or empty**, you need to add it.

### Step 3: Add the test script
Add or update the `"scripts"` section in `package.json` to include:

```json
"scripts": {
  "test": "ts-node amazon-test.ts"
}
```

### Step 4: Complete package.json structure
Make sure your `package.json` looks like this (with all dependencies):

```json
{
  "name": "amazon-webdriverio-test",
  "version": "1.0.0",
  "description": "WebdriverIO test for Amazon search bar verification",
  "main": "amazon-test.ts",
  "scripts": {
    "test": "ts-node amazon-test.ts"
  },
  "keywords": [
    "webdriverio",
    "typescript",
    "automation",
    "testing"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@wdio/cli": "^8.24.0",
    "chromedriver": "^139.0.3",
    "webdriverio": "^8.24.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

### Step 5: Save and reinstall
1. Save the `package.json` file
2. Run in terminal:
   ```powershell
   npm install
   ```
3. Then try:
   ```powershell
   npm test
   ```

## Alternative: Run the test directly
If `npm test` still doesn't work, you can run the test directly:
```powershell
npx ts-node amazon-test.ts
```

## Quick Fix (Copy-Paste)
If you just need to add the script quickly, find the `"scripts":` section (or create it if missing) and make sure it contains:
```json
"scripts": {
  "test": "ts-node amazon-test.ts"
}
```

