// Import our custom CSS
import "@/scss/styles.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.js";

// import Alert from 'bootstrap/js/dist/alert';

// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
