<script>
export default {
  functional: true,
  render: (
    h,
    { children, props } // children gives all vnodes from Content tag body outside in App.vue
  ) => (
    <article class="flex-grow p-4">{children
        .filter(node => node.tag)
        .slice(0, props.limit)}
    </article> // filter only nodes that have a TAG
  )
};
</script>

