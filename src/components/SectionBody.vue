
<script>
export default {
    name: 'SectionBody'
}
</script>
<template>
    <div class="col">
        <div class="my_card">
            <slot name="image"></slot>
            <slot name="title"></slot>
            <slot></slot>
            <slot name="description"></slot>
            <slot name="icons"></slot>
        </div>
    </div>
    <!-- /.col -->
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
</style>