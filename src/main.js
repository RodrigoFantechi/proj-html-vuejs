import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF)
library.add(faYoutube)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLocationDot)
library.add(faPhone)
library.add(faAngleRight)
library.add(faAngleUp)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

