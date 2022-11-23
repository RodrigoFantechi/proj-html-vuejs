
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
      return new URL(`../assets/img/doctor-${name}`, import.meta.url).href
    }
  }  
}
</script>
<template>
 <section class="doctors">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-5.png" alt="">
                    </template>

                    <template #title>
                        <h2>{{store.doctors.mainTitle}} </h2>
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>

                    <template #subtitle>
                        <h6 class="my-3">{{store.doctors.description}}</h6>
                    </template>
                </SectionTitle>
                <div class="row">
                    <SectionBody v-for="(doctor, index) in store.doctors.cols" class="text-start">
                        <template #image> <img :src="getImageUrl(doctor.img)" alt=""></template>
                        <template #title>
                            <h5 class="p-3 m-0">{{ doctor.name }} <br> {{ doctor.profession }}</h5>
                        </template>
                        <template #description>
                            <p class="p-3 m-0"> {{doctor.description}}</p>
                        </template>
                        <template #icons>
                            <div class="list_icons d-flex p-3">
                                <div class="square d-flex justify-content-center align-items-center face">
                                    <font-awesome-icon class="i" icon="fa-brands fa-facebook-f" />
                                </div>
                                <div class="square d-flex justify-content-center align-items-center  twi">
                                    <font-awesome-icon class="i" icon="fa-brands fa-twitter" />
                                </div>
                                <div class="square d-flex justify-content-center align-items-center insta">
                                    <font-awesome-icon class="i" icon="fa-brands fa-instagram" />
                                </div>
                            </div>
                        </template>
                    </SectionBody>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
.doctors {
        background-color: $clr-light-1;  
    }
</style>