
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
        <section class="introduction text-center my-5 py-5">
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
                        <template #title>{{ col }}</template>
                        <template #description>
                            Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim
                        </template>

                    </SingleCol>
                </div>
            </div>
        </section>
        <section class="doctors text-center my-5 py-5">
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
                        <template #title>{{ doctor.name }} <br> {{ doctor.profession }}</template>
                        <template #description>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque
                        </template>
                        <template name="icons">
                          
                        </template>
                    </SingleCol>
                </div>
            </div>
        </section>
    </main>
    <!-- /main -->
</template>
<style lang="scss" scoped>

</style>