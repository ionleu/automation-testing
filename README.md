# MANGO: Automation testing

This repo contain automation scripts using [Playwright](https://playwright.dev/) E2E Framework for Affiliate Portal smoke and regression test cases.

## Getting Started

### Installation

1. Clone the repo on your local machine;
2. Inside **AffiliateAutomation** folder run `npm i` command to install all dependencies;
3. In same folder run `npx playwright install` command to install Chromium, Firefox and Webkit browsers;
4. To check if everything is working, run `npm run open:qa` command in terminal to open the Playwright UI using QA environment.

### Running the tests

The tests can be run using the command **pattern** attached bellow, where you are able to change the `<SCOPE>`'s and `<ENV>`'s to a corresponding value.

_Environments:_ `local`, `qa`, `uat` and `prod`

_Scopes:_ `ui` _(open user interface)_ and `cmd` _(run in terminal)_

**Pattern:** `npm run <SCOPE>:<ENV>`

**Example 1:** `npm run ui:local` - will open UI and the tests will run against local environment

**Example 2:** `npm run cmd:qa` - will run all tests against QA environment

> **NOTE:**
>
> 1.  If you want to use the local environment you'll need to run the [Affiliate Portal](https://dev.azure.com/medicalsolutions/Med%20Sol%20Tech/_git/AffiliatePortal) app locally;
> 2.  Complete list of possible `npm run` commands to trigger different combinations of tests on different environments, check out `scripts` object inside of `package.json`;
> 3.  All commands should be executed into the **AffiliateAutomation** folder, using your preferred terminal.

## Documentation

**IMPORTANT:** Visit [docs](docs/README.md) folder to view the full repo documentation.

## Contributing

This repo is maintained by Affiliate Portal QA Automation and FE team. But contributions are always welcome!

See [CONTRIBUTING.md](/docs/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT](/docs/CODE_OF_CONDUCT.md).

### Feedback

To provide feedback, whether it's a feature request, bug report, or to showcase this repo, please get contact the Affiliate Portal team!

- [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3a7e9f81163e3e49dcb75f92478c547fa7%40thread.tacv2/Affiliate%2520Portal?groupId=7fd7b54a-9d60-49d6-be61-0e20ccc47701&tenantId=25141f81-e52d-4bbc-b4c6-5ad17717b3e8)
