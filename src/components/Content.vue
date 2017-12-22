<script>
export default {
  functional: true,
  render: (
    h,
    { children, props } // children gives all vnodes from Content tag body outside in App.vue
  ) => (
    <div class="flex-grow p-4">{children
        .filter(node => node.tag)
        .slice(0, props.limit)}
    </div> // filter only nodes that have a TAG
  )
};
</script>

