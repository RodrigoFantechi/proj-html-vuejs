
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
        <section class="health_service">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-6.png" alt="">
                    </template>

                    <template #title>
                        <h2>
                            OUR HEALTH SERVICES
                        </h2>
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>

                    <template #subtitle>
                        <h6 class="my-3"> Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                            dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et
                            quasi
                            architecto beatae </h6>
                    </template>
                </SectionTitle>
                <div class="row row-cols-3 pt-5">
                    <SectionBody v-for="(service, index) in store.services">
                        <template #image> <img class="mb-2" :src="'src/assets/img/icon-' + (service.img) + '.png'"
                                alt=""></template>
                        <template #title>
                            <h5>{{ service.title }}</h5>
                        </template>
                        <template #description>
                            <p>
                                At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolore et quas
                            </p>
                        </template>

                    </SectionBody>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
    
</style>