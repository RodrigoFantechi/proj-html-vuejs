
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
    methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/icon-${name}`, import.meta.url).href
    }
  }  
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
                        <h2>{{store.services.mainTitle}}</h2>
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>

                    <template #subtitle>
                        <h6 class="my-3"> {{store.services.description}}</h6>
                    </template>
                </SectionTitle>
                <div class="row row-cols-3 pt-5">
                    <SectionBody v-for="service in store.services.cols">
                        <template #image> <img class="mb-2" :src="getImageUrl(service.img)"
                                alt=""></template>
                        <template #title>
                            <h5>{{ service.title }}</h5>
                        </template>
                        <template #description>
                            <p>
                               {{service.description}}
                            </p>
                        </template>

                    </SectionBody>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
</style>