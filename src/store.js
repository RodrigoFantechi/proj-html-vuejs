import {reactive} from 'vue'


export const store = reactive({
    error: null,
    headerLogo :'/src/assets/img/medical_logo_1x_light.png',
    links: [
        'HOME',
        'ABOUT',
        'DEPARTMENTS',
        'ARTICLES',
        'MAKE APPOINTMENT'
    ]

   
})
