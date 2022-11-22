<script>
import MainIntroduction from './MainIntroduction.vue';
import MainDoctors from './MainDoctors.vue';
import MainService from './MainService.vue';
import MainFacilities from './MainFacilities.vue';
import MainAppointment from './MainAppointment.vue';

export default {
    name: 'AppMain',
    components: {
        MainIntroduction,
        MainDoctors,
        MainService,
        MainFacilities,
        MainAppointment
    },
}
</script>

<template>
    <main>
        <MainIntroduction/>
        <MainDoctors/>
        <MainService/>
        <MainFacilities/>
        <MainAppointment/>
    </main>
    <!-- /main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
</style>