<template>
  <div>
    <!-- slot[name="header"] emmet abbreviation for ↓ -->
    <slot name="header"></slot>
    <h1 @click="onClick">{{message}}</h1>
    <slot name="footer"></slot>
  </div>
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
