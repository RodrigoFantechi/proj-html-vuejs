
<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';
import { store } from '../store'
export default {
    name: 'AppFooter',
    components:{
        FooterTop,
        FooterBottom,
    },
    data() {
        return {
            store,
        }
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

</style>