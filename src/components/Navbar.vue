
<script>
import { store } from '../store'
export default {
    name: 'Navbar',
    data() {
        return {
            store,
        }
    },
}
</script>
<template >
    <nav class="montserrat">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <div class="left_items">
                <div class="image_logo">
                    <img :src="store.headerLogo" alt="Avada Health">
                </div>
            </div>
            <div class="right_items">
                <ul class="d-flex align-items-center">
                    <li v-for="link in store.links"
                        :class="link == store.links[store.links.length - 1] ? 'my_btn' : ''"> <a href="#"
                            :class="link == store.links[0] ? 'active' : ''">{{ link }}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

nav {
    width: 100%;
    position: fixed;
    background-color: transparent;
    font-weight: 600;


    .container-fluid {

        padding: 1.25rem 2.5rem;

        .left_items {
            img {
                width: 180px;
            }
        }

        .right_items {

            ul {
                font-size: 12px;
            }

            a {
                margin: 0.7rem;

                &:hover {
                    color: $clr-pelorous-m
                }

                &.active {
                    color: $clr-pelorous-m
                }
            }

            .my_btn {
                padding: 0.5rem 1rem;
                background-color: $clr-pelorous-ma;

                & a:hover {
                    color: $clr-light;
                }
            }

        }
    }

}
</style>