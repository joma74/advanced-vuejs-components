import Vue from "vue";

const CatsList = Vue.extend({
  functional: true,
  render: (h, { props }) => {
      let propsNames = /** @type {Array.<string>} */(props.names);
      return <div>{
      propsNames
        .map(name => `https://robohash.org/${name}?set=set${props.num}`)
        .map(url => <img src={url} />)
      } </div>
  },
  props: {
    names: {
      type: Array,
      required: true
    },
    num: {
      type: Number,
      required: true
    }
  }
});

export default CatsList;