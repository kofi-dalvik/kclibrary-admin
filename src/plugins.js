import './assets/style.scss';

import AppSelect from './components/app-select.vue';

export default {
    install(Vue) {
        Vue.component('app-select', AppSelect);
    }
}