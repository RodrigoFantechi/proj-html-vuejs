<script>
import Jumbotron from './Jumbotron.vue';
import Navbar from './Navbar.vue';
export default {
    name: 'AppHeader',
    components: {
        Jumbotron,
        Navbar,
    }
}
</script>

<template>
    <header>
        <Navbar />
        <Jumbotron />
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
</style>