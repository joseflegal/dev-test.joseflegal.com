## Josef Coding Challenge

This dev task is in a simple Vue JS SPA.
Install [Vue Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) so you can easily inspect components.

### UI

In `Dashboard.vue` you'll find some files data that is being loaded from an API.
Create a reusable component to render items in the files array. Iterate through the array with `v-for` to do this.
Use a combination of [props](https://vuejs.org/v2/api/#props) and [slots](https://vuejs.org/v2/api/#v-slot)
You can do this as a list or card - up to you! 😁 Feel free to take inspiration from open source UI libraries available but try to use some of the Josef variables in `styles/resources/_variables.scss` to give it a Josef feel.

### Javascript

Create a [computed property](https://vuejs.org/v2/guide/computed.html) that takes the files data and filters it for tags that include `kitten` then sort it by date. Note multiple tags are separated by a `|`. Use this computed in the `v-for` above.

### State Management (optional)

The files data is being managed locally in `Dashboard.vue` state (data). Migrate the handling of state to a its own [vuex module](https://vuex.vuejs.org/guide/modules.html) in `/store`. There is a very basic example in store already handling user data in `store/user`. You could go further by adding full CRUD actions/mutations.
