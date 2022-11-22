import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF)

library.add(faTwitter)
library.add(faInstagram)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

