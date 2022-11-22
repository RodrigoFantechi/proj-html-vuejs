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
        <section class="introduction text-center py-6">
            <div class="my_container">
                <SectionTitle>
                    <template #title>
                        Welcome to Avada Health
                    </template>
                    <template #subtitle>
                        Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo
                    </template>
                </SectionTitle>
                <div class="row pt-5">
                    <SingleCol v-for="(col, index) in store.title">
                        <template #image> <img :src="'src/assets/img/icon-' + (index + 1) + '.png'" alt=""></template>
                        <template #title>
                            <h6>{{ col }}</h6>
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
        <section class="doctors text-center py-6">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-5.png" alt="">
                    </template>

                    <template #title>
                        MEET OUR DOCTORS
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>

                    <template #subtitle>
                        Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi
                        architecto beatae
                    </template>
                </SectionTitle>
                <div class="row">
                    <SingleCol v-for="(doctor, index) in store.doctors" class="text-start">
                        <template #image> <img :src="'src/assets/img/doctor-' + (index + 1) + '.jpg'" alt=""></template>
                        <template #title>
                            <h6 class="p-3 m-0">{{ doctor.name }} <br> {{ doctor.profession }}</h6>
                        </template>
                        <template #description>
                            <p class="p-3 m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque</p>
                        </template>
                        <template #icons>
                            <div class="square d-flex justify-content-center align-items-center face"><font-awesome-icon class="i" icon="fa-brands fa-facebook-f" /></div>
                            <div class="square d-flex justify-content-center align-items-center  twi"><font-awesome-icon class="i" icon="fa-brands fa-twitter" /></div>
                            <div class="square d-flex justify-content-center align-items-center insta"><font-awesome-icon  class="i" icon="fa-brands fa-instagram" /></div>
                        </template>
                    </SingleCol>
                </div>
            </div>
        </section>
        <section class="health_service text-center py-6">
            <div class="my_container">
                <SectionTitle>
                    <template #picture>
                        <img src="../assets/img/icon-6.png" alt="">
                    </template>

                    <template #title>
                        OUR HEALTH SERVICES
                    </template>
                    <template #line>
                        <div class="line"></div>
                    </template>

                    <template #subtitle>
                        Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi
                        architecto beatae
                    </template>
                </SectionTitle>
                <div class="row row-cols-3 pt-5">
                    <SingleCol v-for="(service, index) in store.services">
                        <template #image> <img class="mb-2" :src="'src/assets/img/icon-' + (service.img) + '.png'" alt=""></template>
                        <template #title>
                            <h6>{{ service.title }}</h6>
                        </template>
                        <template #description>
                            <p>
                                At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas
                            </p>
                        </template>

                    </SingleCol>

                </div>
            </div>
        </section>
        <section class="introduction text-center py-6">
            <div class="my_container">
                <SectionTitle>
                    <template #title>
                        Welcome to Avada Health
                    </template>
                    <template #subtitle>
                        Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo
                    </template>
                </SectionTitle>
                <div class="row pt-5">
                    <SingleCol v-for="(col, index) in store.title">
                        <template #image> <img :src="'src/assets/img/icon-' + (index + 1) + '.png'" alt=""></template>
                        <template #title>
                            <h6>{{ col }}</h6>
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
    </main>
    <!-- /main -->
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

</style>