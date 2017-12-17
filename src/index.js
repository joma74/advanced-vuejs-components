import Vue from "vue";

document.getElementById("app1").innerHTML = `
    <h1>My awesome app</h1>
`

new Vue({
    el: "#app2",
    render: h => <div> Hello from vue </div>
})