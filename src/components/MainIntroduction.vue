
<script>
import SectionTitle from './SectionTitle.vue';
import SectionBody from './SectionBody.vue';
import { store } from '../store'
export default {
    name: 'MainIntroduction',
    components: {
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
    <section class="introduction">
        <div class="my_container">
            <SectionTitle>
                <template #title>
                    <h2>{{ store.introduction.mainTitle }}</h2>
                </template>
                <template #subtitle>
                    <h6 class="my-3">{{ store.introduction.description }}</h6>
                </template>
            </SectionTitle>
            <div class="row pt-5">
                <SectionBody v-for="col in store.introduction.cols">
                    <template #image> <img :src="getImageUrl(col.image)" alt=""></template>
                    <template #title>
                        <h5>{{ col.title }}</h5>
                    </template>
                    <template #description>
                        <p>
                            {{ col.text }}
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