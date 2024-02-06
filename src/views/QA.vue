<template>
  <div class="container">
    <h1>QA</h1>

    <p>
      Josef provides most of its services via the web. To run web applications,
      we use backend and frontend services. With scale, quality assurance and
      automated testing become key strategies to keep all the critical
      functionality running without regressions.
    </p>
    <p>
      This application was created with
      <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer"
        >Vue Cli</a
      >
      and comes setup with
      <a
        href="https://www.cypress.io/"
        target="_blank"
        rel="noopener noreferrer"
        >Cypress</a
      >
      for E2E and
      <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"
        >Jest</a
      >
      for Unit tests. You are free to use this setup or ignore it and setup
      whatever tools you prefer to use.
    </p>

    <p>
      For this task, we use
      <a href="https://github.com/typicode/json-server" title="json-server"
        >json-server</a
      >
      to emulate REST API and
      <a href="https://vuejs.org/" title="Vue.js">Vue.js</a> for the frontend.
    </p>
    <h3>API example</h3>
    <p><em>GET http://localhost:3000/entites</em> returns:</p>
    <ul class="entities">
      <code
        >[
        <li v-for="entity in entities" v-bind:key="entity.id">
          { "id" : {{ entity.id }}, "property" : "{{ entity.property }}"}
        </li>
        ]</code
      >
    </ul>

    <h3>Form example</h3>
    <p v-if="submited">
      Form submited:
      <strong>{{ name }}</strong
      >({{ email }}), age of {{ age }}, tel: {{ phone }} ✅
    </p>
    <form v-else class="user-data" @submit.prevent="handleSubmit">
      <JoInputField required name="name" v-model="name" label="Name" />
      <JoInputField
        required
        name="email"
        type="email"
        v-model="email"
        label="Email"
      />
      <JoInputField
        required
        name="age"
        type="number"
        v-model="age"
        label="Age"
      />
      <JoInputField
        required
        name="phone"
        type="tel"
        v-model="phone"
        label="Phone"
      />
      <JoButton type="submit" iconLeft="fa-check"> Submit </JoButton>
    </form>
  </div>
</template>
<script>
import api from "@/api";

export default {
  name: "QA",
  data() {
    return {
      name: "",
      email: "",
      age: "",
      phone: "",
      submited: false,
      entities: [],
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.submited);
      this.submited = true;
      console.log("handle submit");
    },
  },
  created() {
    api.entities.get().then((res) => {
      this.entities = res;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
h3 {
  margin-top: 3rem;
}
.user-data {
  margin-top: $base-spacing * 2;
  padding: $base-spacing;
  background: $josef-purple-pale;
  border-radius: $base-border-radius;
}
</style>
