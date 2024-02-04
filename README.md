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

# To run API testing
cd tests/api
pip3 install -r requirements.txt
python3 -m pytest

# To run e2e testing
cd ../..
npx cygress open
```

## QA Result
1. ### API Testing
Tests have been done using Python with `requests` and `pytest` library. Reason for choosing the framework is personal familiarity. 

API testing includes functionality testing for all methods: GET, POST, PUT, DELETE. In addition, a test for ID uniqueness has been done at the end. After deletions and post more random number of times, IDs are fetched to seek for redundancy. Results show that all tests pass.

For future improvements, testing can be written using `jest` for consistency.

2. ### E2E Testing
![e2e_testing](/tests/e2e/result/e2e_result.png "Title")

E2E testing checks functionality of the form in QA page. in general, the form is not successfully submitted unless all correct information is filled. Tests include missing information in each field, incorrect email format and a successful case. Results show that there is one failed test, regarding incorrect phone format.

For future improvements, testing should also look for message error, check whether the correct message error is prompted. Alternatively, performance testing is suggested.

Side note: I updated Cypress version because the old version (v.2.1) is no longer on my local system (Ubuntu 23.1)


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
