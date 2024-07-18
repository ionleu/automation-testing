# Automation Testing Contributing Guide

Before submitting your contribution, be sure to take a moment and read the following guidelines.

### Table of content

- [Becoming a Contributor](/docs/CONTRIBUTING.md#becoming-a-contributor)
- [Code of Conduct](/docs/CODE_OF_CONDUCT.md)
- [Standards and Best Practices](/docs/CONTRIBUTING.md#standards-and-best-practices)
- [Tooling](/docs/CONTRIBUTING.md#tooling)
- [Development Setup](/docs/CONTRIBUTING.md#development-setup)
- [Branch Creation](/docs/CONTRIBUTING.md#branch-creation)
- [Commit Convention](/docs/CONTRIBUTING.md#commit-convention)
- [Pull Request Guidelines](#/docs/CONTRIBUTING.md#pull-request-guidelines)

## Becoming a Contributor

If you are interested to contribute to Automation Testing project, start by
reviewing pull requests. Suggest us your favorite best practices and standards that can improve our project. Your can join our small team by requesting to join the Automation team in the
[Automation Testing](#) chat or we will reach out and ask you if you want to join or you can ask one of the current maintainers to add you.

Being a contributor is not an obligation. You can help when you have time and be
less active when you don't, being busy with your projects tasks.

## Standards and Best Practices

In order to maintain the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) structure and guarantee code quality please use the following standards and best practices that would lead to lower code complexity and more elegant design.

- [Architecture](/docs/best-practices/ARCHITECTURE.md)
- [Naming Convention](/docs/best-practices/NAMING-CONVENTION.md)
- [Fixtures and Options](/docs/best-practices/FIXTURES-AND-OPTIONS.md)
- [Page Object Models](/docs/best-practices/PAGE-OBJECT-MODELS.md)

## Tooling

- [NPM](https://npmjs.com/) to manage packages and dependencies;
- [Playwright](https://playwright.dev/) for E2E testing;
- [TypeScript](https://www.typescriptlang.org/) for type safety;
- [ESLint](https://eslint.org/) to find and fix problems in the code;
- [Prettier](https://prettier.io/) to format the code.

## Development Setup

1. Clone the repo on your local machine;
2. Inside **automation-testing** folder run `npm i` command to install all dependencies;
3. In same folder run `npx playwright install` command to install Chromium, Firefox and Webkit browsers;
4. To check if everything is working, run `npm run open:qa` command in terminal to open the Playwright UI using QA environment.

> **NOTE:** Remember that these commands must be executed in the root folder of the project.

## Branch Creation

There are multiple ways how to create a branch to start the test scripts development, please follow the most preferred approach.

**Method 1:**
Create a branch for your feature or fix using the terminal:

```bash
# Create and switch into a new feature branch created from development branch
git checkout -b feature/<ID_OF_STORY>
```

```bash
# Create and switch into a new fix branch created from development branch
git checkout -b fix/<ID_OF_STORY>
```

**Method 2:**
Create a branch for your feature or fix using web interface: [click here](https://learn.microsoft.com/en-us/azure/devops/repos/git/create-branch?view=azure-devops&tabs=browser#create-a-new-branch)

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`<type>[(optional <scope>)]: <description>` in your commit message while using one of the following types:

- `feat / feature`: all changes that introduce completely new code or new features, such as adding new test cases;
- `fix / bugfix`: changes that fix a bug (ideally you will additionally reference an issue, if present);
- `refactor`: any code change of existing behavior in the product;
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a util or method usage);
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies;
- `ci`: all changes regarding the configuration of continuous integration (i.e. azure actions, ci system);
- `chore`: all changes to the repository that do not fit into any of the above categories;

**Example:** `git commit -m 'feat(job-proposals): add test scripts to submit candidate to the active job flow'`

If you are interested in the detailed specification you can visit [Conventional Committing](https://www.conventionalcommits.org/) or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Pull Request Guidelines

- The `development` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches;
- Create your pull request to the under the `development` branch;
- Make sure that there are no issues on running CI/CD pipeline;
- It is good to have multiple small commits while working on the PR. Azure Repos will squash it automatically before the merge;
- Provide a detailed description of the content in the PR;
- Add the appropriate screenshots of the tests that was touched;
- The maintainers or you will merge the changes into the `development` branch once the pull request will be approved.

#### Steps to create a Pull Request

1. Create a new branch using the `development` branch, check [here](/docs/CONTRIBUTING.md#branch-creation) the instructions.

2. Create a new branch out of the `development` branch. We follow the convention
   `[<type>/<scope>]`.

   - `type` can be either `docs`, `bugfix`, `feature`, `build`, or any other conventional commit type.
   - `scope` is just a short id that describes the scope of work or the id of story.

   **Example:** `fix/210988` or `docs/maintainance`.

3. Make and commit your changes following the [commit convention](/docs/CONTRIBUTING.md#commit-convention).
4. Now you are good to create the pull request, that should contain a descriptive title, description and screenshots with running tests.
