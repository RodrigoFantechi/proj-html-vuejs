<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
<section class="jumbotron">
            <div class="my_container">
                <div class="col-8">
                    <h1>Caring <span>For Life</span></h1>
                    <p class="my-3">Kind words can short and easy to speak, but their echoes are truly endless. Avada
                        Health focuses on
                        you as if it was our own family. </p>
                    <a class="my_btn_learn_more" href="">LEARN MORE</a>
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
        font-family: $noto-sans;
        

        span {
            color: $clr-primary;
        }
       h1,p{
        font-weight: 100;
       }
       p{
        font-size: 0.85rem;
       }
   
   
    }   
</style>