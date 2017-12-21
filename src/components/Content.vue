<template functional>
    <div slot="content" class="flex-grow p-4">
        <div><img src="https://robohash.org/mindy?set=set4" alt=""></div>
        <div><img src="https://robohash.org/john?set=set4" alt=""></div>
        <div><img src="https://robohash.org/kim?set=set4" alt=""></div>
        <div><img src="https://robohash.org/joel?set=set4" alt=""></div>
        <div><img src="https://robohash.org/maggie?set=set4" alt=""></div>
    </div>
</template>

<script>
export default {
  functional: true,
  render: (h, context) => <div>{context.children}</div> // context.children gives all vnodes
}
</script>

