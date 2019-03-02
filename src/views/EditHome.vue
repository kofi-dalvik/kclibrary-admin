<template>
    <div class="main-content">
        <div class="banner">
            <label for="image">change cover photo</label>
            <input type="file" id="image" @change="uploadImage" class="d-none">
            <img :src="imgUrl" alt="Home Image">
        </div>
        <div class="meeting-days">
            <h5 class="fg-secondary mb-3">MEETING DAYS</h5>

            <span class="fg-primary">Weekend</span>
            <div class="weeks d-flex justify-content-between align-items-center">

                <app-select v-model="me" :values="['Saturdays','Sundays']" class="mr-3"></app-select>
                <app-select class="mr-3" :values="['8:30am']"></app-select>
                <div class="line mr-3"></div>
                <app-select :values="['10:15am']"></app-select>

            </div>
            <br>
            <span class="fg-primary">Midweek</span>
            <div class="weeks d-flex justify-content-between align-items-center">

                <app-select :values="['Monday', 'Tuesday','Wednesday','Thursday','Friday']" v-model="me" class="mr-3"></app-select>
                <app-select class="mr-3" :values="['6:00pm']"></app-select>
                <div class="line mr-3"></div>
                <app-select :values="['7:45pm']"></app-select>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            me: 'Monday',
            imgUrl: 'https://source.unsplash.com/random'
        }
    },

    methods: {
        uploadImage(event) {
            const files = event.target.files;
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imgUrl = e.target.result;
                }

                reader.readAsDataURL(files[0])
            }
        }
    }
}
</script>

<style>

</style>
