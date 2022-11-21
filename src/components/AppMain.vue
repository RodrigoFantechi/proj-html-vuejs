
<script>
import SectionTitle from './SectionTitle.vue';
import { store } from '../store'
export default {
    name: 'AppMain',
    components:{
        SectionTitle,
    }
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <main class="sans">

        <section class="introduction text-center my-5 py-5">
            <div class="my_container">
                <div class="section_title">
                    <h2> Welcome to Avada Health</h2>
                    <h6 class="my-3">Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo</h6>
                </div>
                <!-- /.section_title -->
                <div class="row pt-5">
                    <div class="col">
                        <img class="mb-3" src="../assets/img/icon-1.png" alt="phone">
                        <h6>SAME DAY APPOINTMENTS</h6>
                        <p>Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim</p>
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <img class="mb-3" src="../assets/img/icon-2.png" alt="phone">
                        <h6>WORLD CLASS FACILITIES</h6>
                        <p>Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim</p>
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <img class="mb-3" src="../assets/img/icon-3.png" alt="phone">
                        <h6>EXPERT DOCTORS</h6>
                        <p>Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim</p>
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <img class="mb-3" src="../assets/img/icon-4.png" alt="phone">
                        <h6>COMPLEMENTARY THERAPIES</h6>
                        <p>Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim</p>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
        </section>


        <section class="doctors text-center my-5 py-5">
            <div class="my_container">
                <div class="section_title">
                    <img src="../assets/img/icon-5.png" alt="">
                    <h2>MEET OUR DOCTORS</h2>
                    <div class="line"></div>
                    <h6 class="my-3">Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium
                        dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi
                        architecto beatae</h6>
                </div>
                <!-- /.section_title -->
                <div class="row">
                    <div class="col">
                        <div class="my_card">
                            <img src="../assets/img/doctor-1.jpg" alt="">
                            <div class="personal_details text-start">
                                <p class="name_work">JOHN SHOW <br> Aneshesiologist </p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <!-- /.personal_details -->
                            <div class="social"></div>
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <div class="col">
                        <div class="my_card">
                            <img src="../assets/img/doctor-2.jpg" alt="">
                            <div class="personal_details">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <!-- /.personal_details -->
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <div class="col">
                        <div class="my_card">
                            <img src="../assets/img/doctor-3.jpg" alt="">
                            <div class="personal_details">

                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <!-- /.personal_details -->
                        </div>
                        <!-- /.my_card -->
                    </div>
                </div>

            </div>
        </section>
    </main>
    <!-- /main -->
</template>
<style lang="scss" scoped>

</style>