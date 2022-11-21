
<script>
export default {
 name: 'SectionTitle',
}
</script>
<template>
    <div class="section_title">
        <h2> <slot name="title"></slot></h2>
        <h6> <slot name="subtitle"></slot></h6>
    </div>
</template>
<style lang="scss" scoped>
.section_title {
        width: 70%;
        margin: auto;
    }

</style>