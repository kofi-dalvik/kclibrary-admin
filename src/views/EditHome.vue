<template>
    <div class="main-content">
        <div class="banner">
            <label>change cover photo</label>
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
            me: 'Monday'
        }
    }
}
</script>

<style>

</style>
