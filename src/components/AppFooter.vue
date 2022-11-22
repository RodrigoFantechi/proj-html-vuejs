
<script>
import { store } from '../store'
export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <footer>
        <section class="top_footer">
            <div class="container-fluid py-3">
                <div class="row">
                    <div class="col-4 p-4 ">
                        <img src="../assets/img/medical_logo_1x_dark.png" alt="">
                        <p>Sed ut perpiciatis unde omnis iste ratus error sit voluptatem accusantium dolemue launti
                            totam aperiam, eaque ipsa quae abillo.Invente veritis et quasi architecto beatae luptatem
                            accusantium, rem aperiamsiat. Voluptatem accusest etsium doloremque laudaiem. Lorem ipsum
                            sit dolores est unser. </p>
                        <hr>
                        <p>LEARNMORE ABOUT US</p>
                        <div class="list_icons d-flex py-3">
                            <div class="square d-flex justify-content-center align-items-center face">
                                <font-awesome-icon class="i" icon="fa-brands fa-facebook-f" />
                            </div>
                            <div class="square d-flex justify-content-center align-items-center  twi">
                                <font-awesome-icon class="i" icon="fa-brands fa-twitter" />
                            </div>
                            <div class="square d-flex justify-content-center align-items-center  you">
                                <font-awesome-icon class="i" icon="fa-brands fa-youtube" />
                            </div>
                            <div class="square d-flex justify-content-center align-items-center insta">
                                <font-awesome-icon class="i" icon="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>

                    <div class="col-4 px-5">
                        <h5 class="mt-3">CONTACT INFORMATION</h5>
                        <div class="adress d-flex align-items-center">
                            <font-awesome-icon class="clr_primary" icon="fa-solid fa-location-dot" />
                            <p class="ms-1"> <a href=""> 121 King Street, London United Kingdom</a></p>
                        </div>
                        <div class="phone d-flex align-items-center">
                            <font-awesome-icon class="clr_primary" icon="fa-solid fa-phone" />
                            <p class="ms-1"><a href="">1200.458.566</a></p>
                        </div>
                    </div>

                    <div class="col-4">
                        <h5 class="mt-3">MEDICAL DEPARTMENTS</h5>
                        <div class=" d-flex align-items-center" v-for="depart in store.departments">
                            <div class="circle">
                                <font-awesome-icon class="i" icon="fa-solid fa-angle-right" />
                            </div>
                            <p class="ms-1"><a href="">{{ depart }}</a></p>
                        </div>
                        <a class="my_btn_learn_more mt-4">VIEW OUR DEPARTMENTS</a>

                    </div>
                </div>
            </div>

        </section>
        <section class="bottom_footer">
            <div class=" d-flex  justify-content-between mx-5">
                <div class="left my-3">
                    <p>&copy; Copyright2012 -2020 | Awada Theme by Theme Fusion | All Rights Reserved | Powered by
                        WordPress</p>
                </div>
                <div class="right d-flex align-items-end">
                    <div class="placepage d-flex align-items-center justify-content-center">
                        <font-awesome-icon class="i" icon="fa-solid fa-angle-up" />
                    </div>
                </div>

            </div>
        </section>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

footer {

    .top_footer {
        p {
            font-size: 0.65rem;
            font-weight: 100;
            line-height: 1.5rem;
            margin: 0;
        }

        img {
            max-width: 250px;
            margin-bottom: 1rem;
        }

        font-family: $noto-sans;



        h5 {
            font-family: $montserrat;
            font-size: 0.85rem;
            font-weight: bold;
            line-height: 2rem;
        }

        .square {
            height: 19px;
            aspect-ratio: 1/1;
            margin: 0 0.2rem;
        }

        .face {
            background-color: $clr-face;
        }

        .twi {
            background-color: $clr-twi;
        }

        .insta {
            background-color: $clr-insta;
        }

        .you {
            background-color: $clr-you;
        }

        .i {
            color: $clr-light;
            font-size: 0.65rem;
        }

        .circle {
            width: 20px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $clr-primary;
        }

        a {
            color: $clr-dark;
        }

        .my_btn_learn_more {

            background-color: $clr-light;
            color: $clr-dark;
            font-weight: bold;
            border: 1px solid $clr-dark;
        }
    }

    .bottom_footer {
        background-color: $clr-light-1;

        p {
            font-size: 0.6rem;
            font-weight: 100;
            line-height: 1rem;
            margin: 0;
        }

        .placepage {
            width: 27px;
            aspect-ratio: 1/1;
            background-color: $clr-dark-1;
            border-radius: 2px 2px 0 0;

            .i {
                color: $clr-light;
                font-size: 0.65rem;
            }
        }
    }
}
</style>