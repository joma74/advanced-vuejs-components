import "tailwindcss/dist/tailwind.min.css"
import Vue from "vue";
import App from "./App";

new Vue({
    el: "#app",
    template: "<App message='Hello from index'></App>",
    components: {
        App
    }
});