<script>
export default {
    name: 'SectionTitle',
}
</script>
<template>
    <div class="section_title">
        <slot name="picture"></slot>
        <slot name="title"></slot>
        <slot name="line"></slot>
        <slot name="subtitle"></slot>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.section_title {
    width: 70%;
    margin: auto;
}
</style>