<script>
import { store } from '../store'
export default {
    name: 'Jumbotron',
    data() {
        return {
            store,
        }
    },   
}
</script>

<template>
<section class="jumbotron">
            <div class="my_container">
                <div class="col-8">
                    <h1>{{store.jumbotron.mainTitle1}} <span>{{store.jumbotron.mainTitle2}}</span></h1>
                    <p class="my-3">{{store.jumbotron.description}}</p>
                    <a class="my_btn_learn_more" href="">{{store.jumbotron.btn}}</a>
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
       h1{
        font-size: 48px;
       }
          
   
    }   
</style>