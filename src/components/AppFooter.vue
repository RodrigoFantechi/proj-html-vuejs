
<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';
export default {
    name: 'AppFooter',
    components:{
        FooterTop,
        FooterBottom,
    },
}
</script>
<template>
    <footer>
        <FooterTop/>
        <FooterBottom/>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
footer{
    font-family: $noto-sans;
}
</style>