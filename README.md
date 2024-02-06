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

## Notes from Zane

Front-End:

1. In the future I would add more re-usability to this component. I just kept the component simple so I could focus more on styling (giving it a josef feel / utilising the existing scss variables), demonstrating the use of props / slots and keeping the code in one place. 

2. In the future I would probably give it 3 props (background_colour, height, justify_content [left, evenly_spaced, right]). The children would be their own components (such as ImageComponent and TextComponent) - which would make it easy to manage / dynamically change the style of the child components, manage responsive design and would make it accomodate a flexible amount of child components (i.e 1-6 child components).


Backend:

1. I assumed that a rule_group containing both empty rules and rule_groups is what fulfills the "no rules" case, and therefore will be treated as having no rules / return true (and it's associated question will always be asked).

2. For my unit tests I focused on testing the checkGroup function. I also made a mock store for the unit tests to isolate the unit tests from the store. In the future I would write a seperate set of tests for testing the store actions / mutations / getters etc, and I would look at extracting the test data into their own files to keep the unit test files small / faster to read.

3. I mocked out the console.log function within the unit tests (qa.spec.js) just to make the test output more readable - but feel free to remove the line if you need to see any of the console output when running the unit tests.


QA:

1. I focused on testing visiting the QA page, one happy path and one unhappy path for the e2e tests. In the future I would add additional tests for things like testing each invalid input - testing to make sure only valid emails / phone number / age / names are accepted, testing submission with different fields missing, testing malformed data, and that the correct messages / responses occur when there is invalid input. 

2. For the e2e tests - I added electron to the script as the default browser. I just think this makes it platform agnostic / reduces the risk that the person running the tests will run into any compatability issues.

3. To run the e2e tests - make sure the server is running (npm run dev), then use the command `npm run test:e2e`. Once the tests have finished, the recording should be placed under the 'tests/e2e/videos' directory. I would probably make the e2e script headless for production.


API Testing Results:

Postman:

1. I was able to test all the endpoints listed. When I attempted to insert a new record with a duplicate entity.id, an error was returned as expected (Insert failed, duplicate id) - however the status code was a 500 (server error), whereas it should probably be a 422 (Unprocessable Entity). Other then the status code for trying to enter a duplicate id, the other responses were what I expected and the CRUD functionality works.

Screenshots:

GET    http://localhost:3000/entities: 

![GET all records](tests/entities_api_tests/api_testing_get_records.png)


GET    http://localhost:3000/entities/[id]:

![GET single record](tests/entities_api_tests/api_testing_get_single_record_test.png)


POST   http://localhost:3000/entities: 

![POST](tests/entities_api_tests/api_testing_post_test.png)


PUT    http://localhost:3000/entities/[id]:

![PUT](tests/entities_api_tests/api_testing_put_test.png)


DELETE http://localhost:3000/entities/[id]: 

![DELETE](tests/entities_api_tests/api_testing_delete_test.png)


POST   http://localhost:3000/entities with duplicate id: 

![POST with duplicate id](tests/entities_api_tests/api_testing_duplicate_id_test.png)


Lighthouse:

1. I ran a lighthouse audit of the QA page for Navigation using Desktop, which had the following results:

Performance: 65
Accessibility: 60
Best Practices: 45
SEO: 89

2. I also ran a lighthouse audit of the QA page for Navigation using Mobile, which had the following results:

Performance: 55
Accessibility: 66
Best Practices: 45
SEO: 91

3. Performance could be improved by enabling text compression, reducing the largest contentful paint (LCP) element, reducing unused javascript, minifying javascript, serving static assets with a cache, avoiding legacy javascript and avoiding large network payloads. 

Screenshot: 

![Lighthouse Performance Report](tests/lighthouse_reports/lighthouse_performance_report.png)

4. Accessibility could be improved by adding labels to the form elements, adding a localisation to support different languages / screen readers, adding accessible names to buttons to help screen readers, giving the links better contrast to help for users with impaired vision.
There are also lists which contain list items, but they are wrapped in a code block (which I presume is for styling). Lighthouse recommends all list items should have the list element as a parent. So perhaps the code block could wrap the list element instead of the individual list items.
The heading elements currently jump from h1 to h3. Modifying the h3 elements to h2 elements and adopting the styling for the page could improve the the semantic structure of the page (which could improve navigation).

Screenshots:

![Lighthouse Accessibility Report Part 1](tests/lighthouse_reports/lighthouse_accessibility_report_1.png)
![Lighthouse Accessibility Report Part 2](tests/lighthouse_reports/lighthouse_accessibility_report_2.png)
![Lighthouse Accessibility Report Part 3](tests/lighthouse_reports/lighthouse_accessibility_report_3.png)


5. For best practices - avoid using deprecated APIs, adding source maps for large first-party javascript and removing the unload event listener (it should use pagehide or visabilitychange events instead). 
Lighthouse also complained about an http request within the page - but the request is being made to localhost, so I don't think this should be an issue.
The page also had an issue loading the fonts from font-awesome. This could be due to a broken link.

6. A meta description for the website could be added to improve SEO.
