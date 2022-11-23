import {reactive} from 'vue'


export const store = reactive({
    
    error: null,

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
    ],
    facilities:[
        'Emergency Care',
        'Expert Diagnostics',
        'Superb Rehabilitation'
    ],
    departments:[
        'Cardiology',
        'Pediatrics',
        'Diabetes Care',
        'Pre-natal Care',
        'Ultrasound Enchoscardiogram'
    ],
    slider:[
        {
            slide:'1',
            position: 0,
        },
        {
            slide: '2',
            position: 200
        },
        {
            slide: '3',
            position: 400
        },
        {
            slide: '4',
            position: 600
        },
    ],

    mouveSlider: ()=>{
        store.slider.forEach(element => {
            element.position++
            if (element.position>600){
                element.position = -200
            } 
        });
        
    }
    

   
})
