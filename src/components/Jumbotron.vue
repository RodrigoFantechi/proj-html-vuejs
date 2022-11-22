
<script>
export default {
    name: 'jumbotron'
}
</script>
<template >
<section class="jumbotron">
            <div class="my_container">
                <div class="col-8">
                    <h1 class="sans">Caring <span>For Life</span></h1>
                    <p class="my-3 sans">Kind words can short and easy to speak, but their echoes are truly endless. Avada
                        Health focuses on
                        you as if it was our own family. </p>
                    <a class="my_btn" href="">LEARN MORE</a>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
 .jumbotron {
        background-image: url(../assets/img/header-image-homepage.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 7rem 0;
        color: $clr-light;


        span {
            color: $clr-primary;
        }

        .my_btn {
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.1rem;
            font-family: $montserrat;
            padding: 0.75rem 1.5rem;
            background-color: $clr-primary;
            display: inline-block;
        }
    }   
</style>