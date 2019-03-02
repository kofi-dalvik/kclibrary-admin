<template>
<div class="login">
    <div class="logo d-flex flex-column justify-content-end align-items-center">
        <img src="https://source.unsplash.com/random">
        <p>ADMIN</p>
    </div>

    <div class="form">
        <div class="form-group">
            <input v-model="user.username" type="text" placeholder="username" class="form-control">
        </div>

        <div class="form-group">
            <input v-model="user.password" type="password" placeholder="password" class="form-control">
        </div>

        <div class="form-group">
        <button @click="login" class="btn-block btn btn-default">LOGIN</button>
        <a href="javascript:void(0)">Forgot Password?</a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            console.log('logging in', this.user)
            this.$router.push({name: 'home'})

        }
    }
}
</script>

<style>

</style>
