<template lang="html">
  <Settings>
    <Layout slot-scope="{header, footer}"> <!-- props header and footer come from Settings -->
      <AwesomeHeader slot="header" :header="header"><!-- prop header is pushed to Header -->
          <!-- content of Header is taken as content for slot "header" -->
      </AwesomeHeader>
      <div slot="content" class="flex-grow">
        <select v-model="selectedComp">
          <!-- this works only with a simple js object  -->
          <option v-for="comp in comps" :key="comp.name" :value="comp">{{comp.name}}</option>
        </select>
        <!-- <component> makes a !real vue component out of the given FunctionalComponentOptions -->
        <component :is="selectedComp"></component>
      </div>
      <AwesomeFooter slot="footer" :footer="footer"><!-- prop footer is pushed to Footer -->
          <!-- content of Footer is taken as content for slot "footer" -->
      </AwesomeFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue, { FunctionalComponentOptions } from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Header, Footer } from "./components";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";

/**
 * !Keep this a simple js object. Do not try as Vue.extend or Vue.component.
 * @type {FunctionalComponentOptions}
 */
const One = {
  functional: true,
  name: "OneTada",
  render: h => <h1 class="bg-red">A One</h1>
};

/**
 * !Keep this a simple js object. Do not try as Vue.extend or Vue.component.
 * @type {FunctionalComponentOptions}
 */
const Two = {
  functional: true,
  name: "TwoTada",
  render: h => <h1 class="bg-green">A Two</h1>
};

/**
 * A function by the name of "ThreeTada" :)
 */
const ThreeTada = () => ({
  // The component to load. Should be a Promise
  component: import(/* webpackChunkName: "Three" */ "./components/Three")
});

@Component({
  components: {
    AwesomeFooter: Footer,
    AwesomeHeader: Header,
    Layout,
    Settings
  }
})
export default class App extends Vue {
  comps = [One, Two, ThreeTada];
  selectedComp = this.comps[0];
}
</script>
