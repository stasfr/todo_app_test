import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { setupRouter } from "./router/router";

const pinia = createPinia();
const app = createApp(App);

const router = setupRouter();
app.use(router);

app.use(pinia);
app.mount("#app");
