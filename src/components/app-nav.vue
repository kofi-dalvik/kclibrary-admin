<template>
    <aside class="d-flex app-nav">
        <nav class="main-nav d-flex flex-column">
            <div class="header d-flex align-items-center">
                <span>KOTEI CONGREGATION</span>
            </div>

            <router-link active-class="active" :to="{name: 'home'}" class="d-flex align-items-center">
                <i class="fa fa-home mr-3"></i> <span>Home</span>
            </router-link>

            <router-link active-class="active" :to="{name: 'publishers'}" class="d-flex align-items-center">
                <i class="fa fa-user mr-3"></i> <span>Publishers</span>
            </router-link>

            <router-link active-class="active" :to="{name: 'settings'}" class="d-flex align-items-center bottom">
                <i class="fa fa-cog mr-3"></i> <span>Settings</span>
            </router-link>

        </nav>
        <div class="overlay" @click="closeNav"></div>
    </aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            closeNav: 'closeNav'
        })
    }
}
</script>
