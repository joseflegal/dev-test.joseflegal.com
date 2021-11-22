<template>
  <div class="container">
    <h1>QA</h1>
    <h2>Problem</h2>
    <p>
      Josef provides most of the services via web. To run web applications we
      use backend and frontend services. With scale, quality assurance and
      testing become key strategies to keep all the critical functinality
      running without regressions.
    </p>
    <p>
      For this task we use
      <a href="https://github.com/typicode/json-server" title="json-server"
        >json-server</a
      >
      to emulate REST API and
      <a href="https://vuejs.org/" title="Vue.js">Vue.js</a> for frontend.
    </p>
    <p>
      For example
      <strong><em>GET http://localhost:3000/entites</em></strong> returns:
    </p>
    <ul class="entities">
      <li v-for="entity in entities" v-bind:key="entity.id">
        { "id" : {{ entity.id }}, "property" : "{{ entity.property }}"}
      </li>
    </ul>
    <h2>Task</h2>
    <h3>API testing</h3>
    <p>
      Using <a href="https://www.postman.com/">Postman</a>(or a tool of your
      preference) test functionality of the REST API for the
      <code>entity</code> object. Validate listing, creating, editing and
      deleting objects.
      <br />
      Additionlly, test a unuiqness requirenmnet for
      <code>entity.id</code> property.
      <br />
      Objects can be accessed and modified using requests:
    </p>
    <pre><code>
  GET    http://localhost:3000/entities  
  GET    http://localhost:3000/entities/[id] 
  POST   http://localhost:3000/entities  
  PUT    http://localhost:3000/entities/[id] 
  DELETE http://localhost:3000/entities/[id] 

</code></pre>

    <h3>e2e frontend testing</h3>
    <p>
      Using <a href="https://www.cypress.io/">Cypress</a>(or a tool of your
      preference) navigate to this page and validate that all entities are
      listed inside <code>.entities</code>container
    </p>

    <h3>Bonus: Manual performance and accesisbility testing</h3>
    <p>
      Using
      <a href="https://developers.google.com/web/tools/lighthouse"
        >Lighthouse</a
      >
      run an audit of this page and document your performance and acesebility
      findings.
    </p>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
<script>
import api from "@/api";

export default {
  name: "QA",
  data() {
    return {
      entities: [],
    };
  },
  methods: {
    clickEvent: function (id) {
      alert(id);
    },
  },
  created() {
    api.entities.get().then((res) => {
      this.entities = res;
    });
  },
};
</script>
