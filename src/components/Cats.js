import Vue from "vue";

const CatsList = Vue.extend({
      functional: true,
      render: (h, { props }) => ( 
        <div> {
          props.names
          .map( name => `https://robohash.org/${name}?set=set${props.num}`)
          .map( url => <img src = {url}/>)
          } 
        </div>
      ),
});

export default CatsList;