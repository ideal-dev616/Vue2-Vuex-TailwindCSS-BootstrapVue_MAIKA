/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)

import { BootstrapVue } from 'bootstrap-vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import './app.scss'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);


Vue.use(BootstrapVue)


import PrettyCheckbox from 'pretty-checkbox-vue';

Vue.use(PrettyCheckbox);


// import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
// import App from "./App";

// Install VeeValidate rules and localization


// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// API Calls
// import './http/requests'

// mock
import './fake-db/index.js'

// Theme Configurations
import '../themeConfig.js'


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'

// import Toast from "vue-toastification";
// // Import the CSS or use your own!
// import "vue-toastification/dist/index.css";

// const options = {
//   // You can set your default options here
// };

// Vue.use(Toast, options);


// Vuexy Admin Filters
// import './filters/filters'


// Clipboard
// import VueClipboard from 'vue-clipboard2'
// Vue.use(VueClipboard)


// Tour
// import VueTour from 'vue-tour'
// Vue.use(VueTour)
// require('vue-tour/dist/vue-tour.css')


// VeeValidate
// import {VeeValidate} from 'vee-validate'
// Vue.use(VeeValidate)


// Google Maps
// import * as VueGoogleMaps from 'vue2-google-maps'
// Vue.use(VueGoogleMaps, {
//   load: {
//     // Add your API key here
//     key: 'YOUR_KEY',
//     libraries: 'places' // This is required if you use the Auto complete plug-in
//   }
// })

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')

import Notifications from "vue-notification";

Vue.use(Notifications);

// import VueMaterialIcon from 'vue-material-icon'
// Vue.component(VueMaterialIcon.name, VueMaterialIcon)

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  // acl,
  render: h => h(App)
}).$mount('#app')
