
<script>
export default {
    name: 'SectionTitle',
}
</script>
<template>
    <div class="section_title">
        <slot name="picture"></slot>
        <h2>
            <slot name="title"></slot>
        </h2>
        <slot name="line"></slot>
        <h6 class="my-3">
            <slot name="subtitle"></slot>
        </h6>
    </div>
</template>
<style lang="scss" scoped>
.section_title {
    width: 70%;
    margin: auto;

    h2 {
        font-weight: 100;
    }
    h6 {
        font-size: 0.85rem;
        font-weight: 100;
        line-height: 1.5rem;
    }

}
</style>