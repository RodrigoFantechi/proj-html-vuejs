
<script>
import SectionTitle from './SectionTitle.vue';
import SectionBody from './SectionBody.vue';
import { store } from '../store'
export default {
    name:'MainIntroduction',
    components:{
        SectionTitle,
        SectionBody
    },
        data() {
        return {
            store,
        }
    },   
}
</script>
<template>
         <section class="introduction">
            <div class="my_container">
                <SectionTitle>
                    <template #title>
                        <h2> Welcome to Avada Health</h2>
                    </template>
                    <template #subtitle>
                        <h6 class="my-3">Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                            dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo</h6>
                    </template>
                </SectionTitle>
                <div class="row pt-5">
                    <SectionBody v-for="(col, index) in store.title">
                        <template #image> <img :src="'src/assets/img/icon-' + (index + 1) + '.png'" alt=""></template>
                        <template #title>
                            <h5>{{ col }}</h5>
                        </template>
                        <template #description>
                            <p>
                                Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim
                            </p>
                        </template>

                    </SectionBody>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
    
</style>