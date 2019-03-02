<template>
    <div class="main-content">
        <div class="banner">

        </div>

        <div class="content">
            <div class="josh">
                <h5>Hello Josh!</h5>
            </div>

            <div class="info">
                <p> Currently, there are no info about your congregation </p>
            </div>

            <router-link :to="{name: 'edit-home'}" class="btn round padded btn-default bg-secondary">
                Edit Congregation info
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
