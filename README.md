# Josef coding challenge

Hello 👋 & welcome to the Josef coding challenge. We appreciate you taking the time to complete the assignment, and we're excited about the prospect of you joining the team!

The goal of this assignment is to get a sense of how you think and solve problems. If you're having build issues 🔧 with the project, please don't hesitate to contact us.

The challenge is to build upon a simple Vue.js application.

You may want to install [Vue Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) to enrich your Vue dev experience.

## How it works

- Fork this repo into your account
- Make a new branch
- When you are finished, make a PR on your fork, and invite the person specified in the email to your fork
- We will take a look at your solution, and we might ask you several questions after

## Coding task

### Frontend

In `src/views/Layout.vue`, you'll find a component loading data from an API.

1. Render the list of files from the API.

2. Create a reusable component to render the items, using a combination of [props](https://vuejs.org/v2/api/#props) and [slots](https://vuejs.org/v2/api/#v-slot).

3. The design / UI is open for you to decide 🎨. Try to use some of the scss variables in `src/styles/resources/_variables.scss` to give it a Josef feel.

4. Create a [computed property](https://vuejs.org/v2/guide/computed.html) that takes the file's data and filters it for tags that include `kitten` then sorts it by date.

### Backend

In `src/views/Rules.vue` you'll find a Vue.js view with detailed instructions about the problem.

1. Modify the `checkGroup` function in the file so it returns `true` if all rules and groups apply, otherwise `false`.

2. Try your best to implement the task in an efficient and elegant way.

#### Extra credit

1. The data is currently being managed locally in `src/views/Layout.vue` and `src/views/Rules.vue`, migrate it to a [vuex module](https://vuex.vuejs.org/guide/modules.html) in `src/store`. _See example in `src/store/user`._
2. Write some unit tests for your challenge in `/tests/unit`.

### QA

In `src/views/QA.vue` you'll find a Vue.js view that we want you to test 🧐.

1. **API testing:** Using [Postman](https://www.postman.com/)(or a tool of your preference), test functionality of the REST API for the `entity` object. Validate listing, creating, editing and deleting objects.
   Additionally, test a uniqueness requirement for `entity.id` property. Objects can be accessed and modified using requests:

```
  GET    http://localhost:3000/entities
  GET    http://localhost:3000/entities/[id]
  POST   http://localhost:3000/entities
  PUT    http://localhost:3000/entities/[id]
  DELETE http://localhost:3000/entities/[id]
```

2. **e2e frontend testing:** Using [Cypress](https://www.cypress.io/)(or a tool of your preference) test form submission on the QA page.
3. **Extra credit:** Using [Lighthouse](https://developers.google.com/web/tools/lighthouse) run an audit of the QA page and document your performance and acesebility findings.

When done, save required files in the `tests/` folder and add instructions to the `README.md` 📝.

- Be sure and include as much information as you can about how you are testing and what future tools improvements you might add going forward.

## Getting the project running

```bash

# Fork this project, then clone your fork
git clone https://github.com/...

cd dev-test.joseflegal.com

# Install dependencies
nvm install
npm install

# Start development server
npm run dev

# Visit http://localhost:9001
```

## Scripts

| Script              | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`       | Starts json server on 3000 and Compiles and hot-reloads for development on 9001 |
| `npm run test:unit` | Run your unit tests                                                             |
| `npm run test:e2e`  | Run your end-to-end tests                                                       |
| `npm run lint`      | Lints and fixes files                                                           |
| `npm run build`     | Compiles and minifies for production                                            |

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Testing Instructions

## Overview

The testing strategy for the Vue.js application includes:

- **API Testing**: Validating the functionality of the REST API for entity objects, ensuring CRUD operations work as expected and unique constraints are respected.
- **End-to-End (e2e) Frontend Testing**: Verifying that form submissions on the QA page behave as expected.
- **Performance and Accessibility Audit**: Assessing the QA page's performance and accessibility to identify any potential improvements.

Tools used:

- Postman for API testing.
- Cypress for e2e frontend testing.
- Lighthouse for performance and accessibility audits.

## Prerequisites

Before running the tests, ensure you have:

- Node.js and npm installed.
- The backend server running on `http://localhost:3000`.
- The frontend application running and accessible.
- Postman, Cypress, and Lighthouse installed for testing and auditing.

## API Testing with Postman

### Setting up:

1. Import the provided Postman collection into your Postman application.
2. Set up any required environment variables or parameters in Postman, such as the base URL for the API.

### Running the Tests:

1. Execute the API tests in Postman by selecting the imported collection and running each request.
2. The tests include:
   - **GET**: Validate listing of entities.
   - **POST**: Validate creating new entities, including testing the uniqueness requirement for the `entity.id` property.
   - **PUT**: Validate editing existing entities.
   - **DELETE**: Validate deleting entities.

## End-to-End (e2e) Frontend Testing with Cypress

### Setting up:

1. Install Cypress if not already set up in the project by running `npm install cypress --save-dev`.
2. Open the Cypress Test Runner by running `npx cypress open` in your project directory.

### Running the Tests:

1. Run the e2e tests by selecting the test file in the Cypress Test Runner.
2. The e2e test simulates form submission on the QA page and checks for successful submission feedback.

## Performance and Accessibility Audit with Lighthouse

### Running the Audit:

1. Run Lighthouse against the QA page by navigating to the page in Google Chrome, opening DevTools, and selecting the Lighthouse tab.
2. Generate a report by clicking on "Generate report" and review the performance and accessibility findings.

## Future Improvements

Going forward, consider the following enhancements to the testing setup:

- **CI/CD Integration**: Automate running these tests in a Continuous Integration/Continuous Deployment pipeline.
- **Expanded Test Coverage**: Add more comprehensive test cases to cover additional user interactions and edge cases.
- **Additional Tools and Frameworks**: Evaluate and integrate additional tools to further enhance testing capabilities, such as visual regression testing tools or API contract testing tools.
