
<script>
import { store } from '../store'
export default {
    name: 'FooterBottom',
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
          <section class="bottom_footer">
            <div class=" d-flex  justify-content-between mx-5">
                <div class="left my-3">
                    <p>&copy; {{store.copyRight}}</p>
                </div>
                <div class="right d-flex align-items-end">
                    <div class="placepage d-flex align-items-center justify-content-center">
                        <a href="header"><font-awesome-icon class="i" icon="fa-solid fa-angle-up" /></a>
                    </div>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
.bottom_footer {
        background-color: $clr-light-1;

        p {
            line-height: 1rem;
            margin: 0;
        }

        .placepage {
            width: 27px;
            aspect-ratio: 1/1;
            background-color: $clr-dark-1;
            border-radius: 2px 2px 0 0;
            transition: 1s;
            &:hover{
                width: 27px;
                height: 35px;
            }

        }
    }
</style>