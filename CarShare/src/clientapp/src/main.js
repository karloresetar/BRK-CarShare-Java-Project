import { createApp } from "vue";
import { createPinia } from "pinia";
import '@mdi/font/css/materialdesignicons.css'
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");