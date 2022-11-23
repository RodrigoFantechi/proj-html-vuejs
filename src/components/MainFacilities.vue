
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
                            <h2>{{store.facilities.mainTitle}}</h2>
                        </template>
                        <template #line>
                            <div class="line"></div>
                        </template>
                        <template #subtitle>
                            <h6 class="my-3"> {{store.facilities.description}}</h6>
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
                        <SectionBody v-for="(col, index) in store.facilities.cols"
                            :style="(index != 0 && index != 1 ? 'background-color : #327EC7;' : '') || (index == 0 ? 'background-color : #3AAFBF;' : 'background-color : #3597C3;')">
                            <template #title>
                                <h6>{{ col.title }}</h6>
                            </template>
                            <template #default>
                                <img src="../assets/img/wave-divider.png" alt="">
                            </template>
                            <template #description>
                                <p>{{col.description}}</p>
                                <a class="my_btn_learn_more" href="">{{col.btn}}</a>
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
            
            .line{
                border-bottom: 1px solid $clr-light;
            }
        }

    }
</style>