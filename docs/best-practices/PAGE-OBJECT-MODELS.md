## Page Object Models

Helps us to create a higher-level API which simplify maintenance by capturing and encapsulate element selectors in one place and create reusable code to avoid repetition that uses [Single-Responsibility](https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5) and[ Don't Repet Yorself](https://codinglead.co/javascript/what-is-DRY-code) principles.

_Learn more: https://playwright.dev/docs/pom_

#### Elements:

Basic view blocks that cannot be split into smaller parts, such ui elements: select, dropdown, progress bar, etc.

#### Fragments:

More complex blocks that contain more elements and business logic, such as: navigation, form, filter, etc.

#### Pages:

Collection of Elements and Fragments, such as: dashboard, user maintenance, job proposals, etc.
