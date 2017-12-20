<template>
    <div class="flex flex-col h-screen">
        <slot name="header">
            <h1 class="text-red">Please add a header</h1>
        </slot>
        <slot name="content">
            <h1 class="flex-grow text-orange">Please add some content</h1>
        </slot>
        <slot name="footer">
            <h1 class="text-green">Please add a footer</h1>
        </slot>
    </div>
</template>