
<script>

export default {
    name: 'FooterBottom',

}
</script>
<template>
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
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

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
</style>