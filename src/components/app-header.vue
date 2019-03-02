<template>
        <header class="app-header d-flex align-items-center">
            <a @click="openNav" href="javascript:void(0)" class="ml-3 mr-3">
                <i class="fa fa-bars"></i>
            </a>
            <span>{{$route.meta.title}}</span>
        </header>
</template>


<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions({
            openNav: 'openNav'
        })
    }
}
</script>