<template>
  <Settings>
    <Layout slot-scope="{header, footer}">
      <h1 slot="header" class="bg-blue text-white p-2">{{header}}</h1>
      <h2 slot="footer" class="bg-grey-light text-blue text-center p-2">{{footer}}</h2>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";

@Component({
  components: {
    Layout,
    Settings
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
