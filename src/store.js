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
    ],
    title:[
        'SAME DAY APPOINTMENTS',
        'WORLD CLASS FACILITIES',
        'EXPERT DOCTORS',
        'COMPLEMENTARY THERAPIES',
    ],
    doctors:[
        {
            name: 'JON SNOW',
            profession: 'Anesthesiologist',
        },
        {
            name: 'TONY STARK',
            profession: 'Cardiologist',
        },
        {
            name: 'ANNA SMITH',
            profession: 'Nurse Practitioner',
        },
    ],
    services:[
        {
            title: 'REHABILITATION CENTER',
            img: '14'
        },
        {
            title: 'DENTAL IPANTS',
            img: '15'
        },
        {
            title: 'MEDICINE RESEARCH',
            img: '16'
        },
        {
            title: 'BLOOD BANK',
            img: '11'
        },
        {
            title: 'PHARMACEUTICAL ADVICE',
            img: '12'
        },
        {
            title: 'MEDICAL CONSELING',
            img: '13'
        },
    ]
    

   
})
