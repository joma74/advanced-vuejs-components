import "tailwindcss/dist/tailwind.min.css"
import Vue from "vue";
import App from "./App.vue";

new Vue({
    el: "#app",
    render: h => (
        <App>
            <h2 slot="header" class="text-orange">Header</h2>
            <h3 slot="footer" class="text-green">Footer</h3>
        </App>
    )
});