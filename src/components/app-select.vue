<template>
    <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{selected}}
        </button>
        <div class="dropdown-menu">
            <a v-for="(entry, index) in values" :key="index"
             @click="selectItem(entry)" class="dropdown-item" href="javascript:void(0)">{{entry}}</a>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        values: {
            type: Array
        },
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            selected: ''
        }
    },
    methods: {
        selectItem(entry) {
            this.selected = entry;
            this.$emit('input', entry)
        }
    },
    mounted() {
        this.selected = this.value;
    }
}
</script>
