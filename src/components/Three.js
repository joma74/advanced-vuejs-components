import Vue, { FunctionalComponentOptions } from "vue";

/**
 * !Keep this a simple js object. Do not try as Vue.extend or Vue.component.
 * @type {FunctionalComponentOptions}
 */
const Three = Vue.component("Three",{
    functional: true,
    name: "Three",
    render: h => <h1 class="bg-purple">A Three</h1>
});

export default Three;