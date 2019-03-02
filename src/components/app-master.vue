<template>
    <div>
        <app-header/>
        <app-nav/>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from './app-header.vue';
import AppNav from './app-nav.vue';

export default {
    components: {
        AppHeader,
        AppNav
    }
}


</script>

<style>

</style>
