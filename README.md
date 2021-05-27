# Josef coding challenge

Hello 👋 & welcome to the anvil coding challenge. We appreciate you taking the time to complete the assignment and we're excited about the prospect of you joining the team!

The goal of this assignment is to get a sense for how you think and solve problems. If you're having build issues 🔧 with the project, please don't hesitate to contact us.

The challenge is to build upon a simple Vue.js application.

You may want to install [Vue Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) to enrich your Vue dev experience.

## Instructions

In `src/views/Dashboard.vue` you'll find a component that is loading data from an API.

1. Render the list of files from the API.

2. Create a reusable component to render the items, using a combination of [props](https://vuejs.org/v2/api/#props) and [slots](https://vuejs.org/v2/api/#v-slot).

3. The design / UI is open for you to decide 😁. Try to use some of the scss variables in `src/styles/resources/_variables.scss` to give it a Josef feel.

4. Create a [computed property](https://vuejs.org/v2/guide/computed.html) that takes the files data and filters it for tags that include `kitten` then sorts it by date.

### Extra Credit

1. The files data is currently being managed locally in `src/views/Dashboard.vue`, migrate it to a [vuex module](https://vuex.vuejs.org/guide/modules.html) in `src/store`. *See example in `src/store/user`.*
2. Write some unit tests for your challenge in `/tests/unit`.

## How it works

- Fork this repo into your own account
- Make a new branch
- When you are finished, make a PR on your fork, and invite the person specified in the email to your fork
- We will take a look at your solution, then talk through your solution during your interview

## Getting the project running

```bash

# Fork this project, then clone your fork
git clone https://github.com/...

cd dev-test.joseflegal.com

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:9001
```

## Scripts

|       Script        |                                   Description                                   |
| ------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`       | Starts json server on 3000 and Compiles and hot-reloads for development on 9001 |
| `npm run test:unit` | Run your unit tests                                                             |
| `npm run test:e2e`  | Run your end-to-end tests                                                       |
| `npm run lint`      | Lints and fixes files                                                           |
| `npm run build`     | Compiles and minifies for production                                            |

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
