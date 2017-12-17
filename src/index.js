import {} from "rxjs"
import {
    Observable
} from "rxjs/Observable";
import Vue from "vue";

Observable.interval(1000).subscribe(
    i => document.getElementById("app1").innerHTML = `
    <h1>My awesome app</h1>
    <h1>${i}</h1>
`
)

new Vue({
    el: "#app2",
    render: h => <div>Hello from vue</div>
})

