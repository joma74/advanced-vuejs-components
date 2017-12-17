<template>
  <div>{{message}}</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component"

@Component({})
export default class App extends Vue {
  message = "hello from class"
}
</script>
