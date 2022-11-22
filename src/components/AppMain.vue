<script>
import SectionTitle from './SectionTitle.vue';
import SingleCol from './SingleCol.vue';
import { store } from '../store'
export default {
    name: 'AppMain',
    components: {
        SectionTitle,
        SingleCol,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main>
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
                    <SingleCol v-for="(col, index) in store.title">
                        <template #image> <img :src="'src/assets/img/icon-' + (index + 1) + '.png'" alt=""></template>
                        <template #title>
                            <h5>{{ col }}</h5>
                        </template>
                        <template #description>
                            <p>
                                Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim
                            </p>
                        </template>

                    </SingleCol>
                </div>
            </div>
        </section>
        <section class="doctors">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-5.png" alt="">
                    </template>

                    <template #title>
                        <h2>
                            MEET OUR DOCTORS
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
                <div class="row">
                    <SingleCol v-for="(doctor, index) in store.doctors" class="text-start">
                        <template #image> <img :src="'src/assets/img/doctor-' + (index + 1) + '.jpg'" alt=""></template>
                        <template #title>
                            <h5 class="p-3 m-0">{{ doctor.name }} <br> {{ doctor.profession }}</h5>
                        </template>
                        <template #description>
                            <p class="p-3 m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque</p>
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
                    </SingleCol>
                </div>
            </div>
        </section>
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
                    <SingleCol v-for="(service, index) in store.services">
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

                    </SingleCol>
                </div>
            </div>
        </section>
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
                        <SingleCol v-for="(col, index) in store.facilities"
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

                        </SingleCol>
                    </div>
                </div>
            </div>
        </section>
        <section class="appointment">
            <div class="top">
                <div class="my_container">
                    <SectionTitle>
                        <template #picture>
                            <img src="../assets/img/icon-7.png" alt="">
                        </template>
                        <template #title>
                            <h2>Make An Appointment</h2>
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
                            <div class="row">
                                <div class="col-6">
                                    <input type="text" name="name" placeholder="Name" class="my_form_control">
                                </div>
                                <div class="col-6">
                                    <input type="text" name="name" placeholder="E-mail" class="my_form_control">
                                </div>
                                <div class="col-6">
                                    <input type="text" name="name" placeholder="Phone Number" class="my_form_control">
                                </div>
                                <div class="col-6">
                                    <input type="text" name="name" placeholder="Appointment Date"
                                        class="my_form_control">
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
                <div class="my_container">
                    <img src="../assets" alt="">
                </div>
            </div>
        </section>
    </main>
    <!-- /main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

</style>