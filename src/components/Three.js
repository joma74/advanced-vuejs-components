import Vue, { Component } from "vue";

/**
 * @type {Component}
 */
const Three = Vue.component("Three", {
  functional: true,
  name: "Three",
  render: h => <h1 class="bg-purple">A Three</h1>
});

export default Three;
