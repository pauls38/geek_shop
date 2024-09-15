import { createApp } from 'vue'
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from './App.vue'
import router from './router'
import store from './store'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab);

createApp(App)
    .component('fa', FontAwesomeIcon)
            .use(store)
            .use(router)
            .mount('#app');
