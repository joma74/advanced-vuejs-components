<template>
  <Layout>
    <h1 slot="content" class="flex-grow" @click="onClick">Content goes here "{{message}}"!</h1>
  </Layout>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {
  /**
   * @type {string}
   */
  @Prop({ default: "Hello from Prop decorator" })
  message;

  onClick() {
    this.message = "Goodbye " + this.message;
  }
}
</script>
