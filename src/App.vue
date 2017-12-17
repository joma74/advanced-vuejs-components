<template>
  <div @click="onClick">{{message}}</div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  /**
   * @type {string}
   */
  @Prop({ default: "Hello from Prop decorator" })
  message;

  onClick() {
    this.message = "goodbye from class";
  }
}
</script>
