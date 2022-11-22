
<script>
export default {
    name: 'SingleCol'
}
</script>
<template >
    <div class="col">
        <div class="my_card">
            <slot name="image"></slot>
            <slot name="title"></slot>
            <slot name="description"></slot>
            <div class="list_icons d-flex p-3"><slot name="icons"></slot></div>
        </div>
    </div>
    <!-- /.col -->
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
h6 {
    font-size: 0.85rem;
    font-weight: 100;
    line-height: 1.5rem;
}

p {
    font-size: 0.65rem;
    font-weight: 100;
    line-height: 1.2rem;
}
.my_card{
    background-color: $clr-light;
}
</style>