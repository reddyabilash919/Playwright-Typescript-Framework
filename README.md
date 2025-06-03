# Playwright-TypeScript-Framework

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-4A633F?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2671E5?style=for-the-badge&logo=githubactions&logoColor=white)

A robust and scalable UI automation framework built with Playwright and TypeScript. This framework is designed to facilitate efficient and reliable end-to-end testing of web applications.

## ✨ Features

* **TypeScript:** Leverage static typing for better code quality, maintainability, and developer experience.
* **Playwright:** Utilize the fast, reliable, and versatile Playwright library for cross-browser testing (Chromium, Firefox, WebKit).
* **Page Object Model (POM):** Organized test structure with well-defined page objects for improved readability and reusability.
* **Data-Driven Testing:** Manage test data effectively with a dedicated `fixtures` directory.
* **Automated Reporting:** Generate clear and comprehensive test reports (HTML Reporter).
* **Automatic Screenshots/Videos on Failure:** Simplifies debugging by capturing visual evidence of failures.
* **Trace Viewer:** Analyze test failures with detailed traces of browser interactions.
* **Parallel Execution:** Run tests concurrently to significantly reduce execution time.
* **GitHub Actions Integration:** Example CI/CD pipeline for automated test execution.

---

## 🚀 Getting Started

Follow these steps to get your local environment set up and run the tests.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/reddyabilash919/Playwright-Typescript-Framework.git](https://github.com/reddyabilash919/Playwright-Typescript-Framework.git)
    cd Playwright-Typescript-Framework
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
    This will install Playwright and its browser dependencies (Chromium, Firefox, WebKit).

---

## 🏃 Running Tests

Playwright provides a powerful CLI for running tests.

### Basic Commands

* **Run all tests:**
    ```bash
    npx playwright test
    ```

* **Run tests in a specific file:**
    ```bash
    npx playwright test tests/example.spec.ts
    ```

* **Run a specific test by name (substring match):**
    ```bash
    npx playwright test -g "User Login"
    ```

* **Run tests in headless mode (default):**
    ```bash
    npx playwright test
    ```

* **Run tests in headed mode (browser UI visible):**
    ```bash
    npx playwright test --headed
    ```

* **Run tests on a specific browser (e.g., Chromium):**
    ```bash
    npx playwright test --project=chromium
    ```
    You can also specify `firefox` or `webkit`.

* **Run tests with parallel workers (e.g., 4 workers):**
    ```bash
    npx playwright test --workers=4
    ```

---

### Generating Reports

Playwright automatically generates an HTML report after test execution (configured in `playwright.config.ts`).

* **Open the HTML report:**
    ```bash
    npx playwright show-report
    ```
    This will open the interactive HTML report in your browser, showing test results, screenshots, and videos for failed tests.

---

### Debugging Tests

* **Debug with Playwright Inspector:**
    ```bash
    npx playwright test --debug
    ```
    This opens the Playwright Inspector, allowing you to step through your test, inspect locators, and understand the test execution flow.

* **Retries on failure:**
    Tests are configured to retry once on failure (`retries: 1` in `playwright.config.ts`), which helps in identifying flaky tests.

---

## ⚙️ Configuration

The main configuration for the framework is located in `playwright.config.ts` at the root of the project.

Key configurations include:

* **`testDir`**: Specifies the directory where your test files are located.
* **`use`**: Shared settings for all projects, such as:
    * `baseURL`: The base URL for your application under test.
    * `headless`: `true` for headless browser execution, `false` for headed.
    * `video`: `on-first-retry` or `retain-on-failure` to record videos of failed tests.
    * `screenshot`: `only-on-failure` to take screenshots of failed tests.
    * `trace`: `on-first-retry` to capture detailed execution traces.
* **`projects`**: Defines different browser configurations (Chromium, Firefox, WebKit, mobile viewports).
* **`reporter`**: Sets the test reporter (e.g., `html` for the interactive HTML report).

Feel free to modify `playwright.config.ts` to suit your project's specific needs (e.g., adding more projects for different environments, changing `baseURL`, etc.).

---

## 📂 Project Structure

Here's a list-based breakdown of the framework's directory structure, which should render reliably:

* `.github/workflows/`: GitHub Actions workflow files for CI/CD
* `config/`: Environment-specific configurations and test setup
* `fixtures/`: Custom Playwright test fixtures and shared data (e.g., test data interfaces, global setup)
* `pages/`: Page Object Model (POM) classes for web pages/components
* `playwright-report/`: Generated test reports (HTML, JSON, etc.)
* `tests/`: All your test cases (.spec.ts files)
* `utils/`: Shared utility functions and custom helpers
* `.env`: Environment variables (local, not committed to Git)
* `.gitignore`: Specifies intentionally untracked files to ignore
* `package.json`: Project dependencies and scripts
* `playwright.config.ts`: Playwright global configuration
* `tsconfig.json`: TypeScript compiler configuration
