import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./style.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/bigelow-rules";

createApp(App).use(router).mount("#app");
