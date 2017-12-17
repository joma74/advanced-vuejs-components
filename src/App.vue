<template>
  <div @click="onClick">{{message}}</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({ props:{
  message: {
    default: "Hello from default prop"
  }
}})
export default class App extends Vue {

  onClick() {
    this.message = "goodbye from class";
  }
}
</script>
