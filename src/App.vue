<template>
  <div @click="onClick">{{message}}</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {
  message = "hello from class";

  onClick() {
    this.message = "goodbye from class";
  }
}
</script>
