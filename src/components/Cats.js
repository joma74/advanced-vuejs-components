import Vue from "vue";

const Selected = Vue.component("Selected",{
  props: {
    render: {
      default: h => null
    }
  },
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    /**
     * @param {number} value 
     */
    select(value) {
      this.selected = value
    }
  },
  render() {
    return this.$props.render({
      selected: this.selected,
      select: this.select
    })
  },
  computed: {
    withoutthatinferencebreaks(){
    }
  }
});

const CatsList = Vue.extend({
  functional: true,
  render: (h, { props }) => {
      let propsNames = /** @type {Array.<string>} */(props.names);
      return <div>{
      propsNames
        .map(name => `https://robohash.org/${name}?set=set${props.num}`)
        .map((url, index) => {
          return (
          <img 
            class={props.selected == index ? "bg-blue" : ""}
            onClick={event => props.select(index)}
            src={url}
          />)
        })
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
    },
    selected: {
      type: Number,
      required: true
    },
    select: {
      type: Function,
      required: true
    }
  }
});

export default Vue.extend({
  functional: true,
  render: (h, { props }) => {
    return (
      <div>
        <Selected render={
          ({ // what should i say - arguments must be outside of render context
             // these bunnies are bound to the value inside Selected' render function
            selected, select
          }) => {
            return (
              <div>
                <input
                  class="py-2 px-3 text-4x1"
                  type="number"
                  onChange={event => select(event.target.value)} // whenever triggered, store value inside Selected
                  value={selected}
                />
                <CatsList 
                  names={props.names}
                  num={props.num}
                  selected={Number.parseInt(selected)} // prop of CatsList
                  select={select} // prop of CatsList
                />
              </div>
            )
          }
        }/>
      </div>
    )
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
})