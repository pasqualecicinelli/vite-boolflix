import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(starRegular, starSolid);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
