// Import our custom CSS
import "@/scss/styles.scss";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
