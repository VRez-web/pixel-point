import {createPinia} from 'pinia';
import {createApp} from 'vue';
import App from './App.vue';
import router from "@/router";

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

// styles
import "/src/assets/scss/main.scss"

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app');
