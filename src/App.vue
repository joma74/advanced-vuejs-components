<template>
  <Settings>
    <Layout slot-scope="{header, footer}"> <!-- props header and footer come from Settings -->
      <AwesomeHeader slot="header" :header="header"><!-- prop header is pushed to Header -->
          <!-- content of Header is taken as content for slot "header" -->
      </AwesomeHeader>
      <Cats slot="content" :names="names" :num="3">
        <div><img src="https://robohash.org/mindy?set=set4" alt=""></div>
        <div><img src="https://robohash.org/john?set=set4" alt=""></div>
        <div><img src="https://robohash.org/kim?set=set4" alt=""></div>
        <div><img src="https://robohash.org/joel?set=set4" alt=""></div>
        <div><img src="https://robohash.org/maggie?set=set4" alt=""></div>
      </Cats>
      <AwesomeFooter slot="footer" :footer="footer"><!-- prop footer is pushed to Footer -->
          <!-- content of Footer is taken as content for slot "footer" -->
      </AwesomeFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Header, Footer, Content } from "./components";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";

const Cats = {
  functional: true,
  render: (h, {props}) => (<div>{
    props.names.map(name => `https://robohash.org/${name}?set=set${props.num}`).
    map(url => <img src={url} />)
  }</div>)
}

@Component({
  components: {
    Cats,
    Content,
    AwesomeFooter: Footer,
    AwesomeHeader:Header,
    Layout,
    Settings
  }
})
export default class App extends Vue {
  names = ["mindy","john", "kim", "joel", "maggie"]
}
</script>
