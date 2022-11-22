
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
   <section class="facilities">
            <div class="top">
                <div class="my_container">
                    <SectionTitle>
                        <template #picture>
                            <img src="../assets/img/icon-7.png" alt="">
                        </template>
                        <template #title>
                            <h2>TOUR OUR FACILITIES</h2>
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
                        <template #default>
                            <img src="../assets/img/play-icon.png" alt="">
                        </template>
                    </SectionTitle>
                </div>
            </div>
            <div class="bottom">
                <div class="container-fluid ">
                    <div class="row">
                        <SectionBody v-for="(col, index) in store.facilities"
                            :style="(index != 0 && index != 1 ? 'background-color : #327EC7;' : '') || (index == 0 ? 'background-color : #3AAFBF;' : 'background-color : #3597C3;')">
                            <template #title>
                                <h6>{{ col }}</h6>
                            </template>
                            <template #default>
                                <img src="../assets/img/wave-divider.png" alt="">
                            </template>
                            <template #description>
                                <p>sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque</p>
                                <a class="my_btn_learn_more" href="">LEARN MORE</a>
                            </template>

                        </SectionBody>
                    </div>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
.facilities {
        color: $clr-light;

        .top {

            background-image: url(../assets/img/paralax-bg-tour-facilities.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

    }
</style>