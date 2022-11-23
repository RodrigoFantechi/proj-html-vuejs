
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
      return new URL(`../assets/img/client-logos-${name}`, import.meta.url).href
    }
  }
}
</script>
<template>
    <section class="appointment">
        <div class="top">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-7.png" alt="">
                    </template>
                    <template #title>
                        <h2>{{store.appointment.mainTitle}}</h2>
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>
                    <template #subtitle>
                        <h6 class="my-3"> {{store.appointment.description}}</h6>
                    </template>
                    <template #default>
                        <div class="row">
                            <div class="col-6">
                                <input type="text" name="name" placeholder="Name" class="my_form_control">
                            </div>
                            <div class="col-6">
                                <input type="text" name="email" placeholder="E-mail" class="my_form_control">
                            </div>
                            <div class="col-6">
                                <input type="text" name="phone" placeholder="Phone Number" class="my_form_control">
                            </div>
                            <div class="col-6">
                                <input type="text" name="date" placeholder="Appointment Date" class="my_form_control">
                            </div>
                            <div class="col-12">
                                <textarea rows="4" cols="50" placeholder="How can we help?*"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="my_btn_learn_more">MAKE AN APPOINTMENT</button>
                    </template>
                </SectionTitle>
            </div>
        </div>
        <div class="bottom">
            <div class="my_container py-3">
                <a href="#" v-for="slide in store.slider" :style="'left:'+(slide.position)+'px'">
                    <img :src="getImageUrl(slide.slide)"  alt="">
                </a>
                    

                
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.appointment {
    color: $clr-light;

    .top {
        background-image: url(../assets/img/make-an-appointment.jpg);
        background-repeat: no-repeat;
        background-size: cover;

        button {
            border: none;
            color: $clr-light;
            width: 100%;

        }

        .line {
            border-bottom: 1px solid $clr-light;
        }
    }

    .bottom {
        background-image: url(../assets/img/rgb-gradient-bar-for-logo-carrasel.jpg);

        .my_container {
            width: 600px;
            overflow-x: hidden;
            height: 250px;
            position: relative;
            a {
                width: 200px;
                display: inline-block;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                img{
                    width: 100%;
                    aspect-ratio: 1/1;
                }
            }
        }

    }
}
</style>