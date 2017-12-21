<template>
  <Settings>
    <Layout slot-scope="{header, footer}"> <!-- props header and footer come from Settings -->
      <Header slot="header" :header="header"><!-- prop header is pushed to Header -->
          <!-- content of Header is taken as content for slot "header" -->
      </Header>
      <Footer slot="footer" :footer="footer"><!-- prop footer is pushed to Footer -->
          <!-- content of Footer is taken as content for slot "footer" -->
      </Footer>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import {Header, Footer} from "./components"
import Layout from "./Layout.vue"
import Settings from "./Settings.vue";

@Component({
  components: {
    Footer,
    Header,
    Layout,
    Settings,
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
