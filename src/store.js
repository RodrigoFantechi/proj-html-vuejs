import { reactive } from 'vue'


export const store = reactive({

    copyRight: 'Copyright2012 -2020 | Awada Theme by Theme Fusion | All Rights Reserved | Powered byWordPress',

    jumbotron:{
        mainTitle1:'Caring',
        mainTitle2:'For Life',
        description: 'Kind words can short and easy to speak, but their echoes are truly endless. Avada Health focuses on you as if it was our own family. ',
        btn: 'LEARN MORE',
    },
    links: [
        'HOME',
        'ABOUT',
        'DEPARTMENTS',
        'ARTICLES',
        'MAKE APPOINTMENT'
    ],
    introduction: {
        mainTitle: 'Welcome to Avada Health',
        description: 'Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo',

        cols: [
            {
                title: 'SAME DAY APPOINTMENTS',
                image: '1.png',
                text: 'Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim'
            },
            {
                title: 'WORLD CLASS FACILITIES',
                image: '2.png',
                text: 'Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim'
            },
            {
                title: 'EXPERT DOCTORS',
                image: '3.png',
                text: 'Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim'
            },
            {
                title: 'COMPLEMENTARY THERAPIES',
                image: '4.png',
                text: 'Sed ut prespiciatis unde omnis iste natus error sit voluptam accusantim'
            }
        ]
    },
    doctors: {
        mainTitle: 'MEET OUR DOCTORS',
        description: 'Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi architecto beatae',
        cols: [
            {
                name: 'JON SNOW',
                profession: 'Anesthesiologist',
                img: '1.jpg',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
            },
            {
                name: 'TONY STARK',
                profession: 'Cardiologist',
                img: '2.jpg',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
            },
            {
                name: 'ANNA SMITH',
                profession: 'Nurse Practitioner',
                img: '3.jpg',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
            },
        ]
    },
    services: {
        mainTitle: 'OUR HEALTH SERVICES',
        description: 'Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi architecto beatae',

        cols: [
            {
                title: 'REHABILITATION CENTER',
                img: '14.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
            {
                title: 'DENTAL IPANTS',
                img: '15.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
            {
                title: 'MEDICINE RESEARCH',
                img: '16.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
            {
                title: 'BLOOD BANK',
                img: '11.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
            {
                title: 'PHARMACEUTICAL ADVICE',
                img: '12.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
            {
                title: 'MEDICAL CONSELING',
                img: '13.png',
                description:'At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore et quas'
            },
        ]
    },
    facilities: {
        mainTitle: 'TOUR OUR FACILITIES',
        description: 'Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi architecto beatae',
        cols:[
            {
                title: 'Emergency Care',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque',
                btn: 'LEARN MORE'
            },
            {
                title: 'Expert Diagnostics',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque',
                btn: 'LEARN MORE'
            },
            {
                title: 'Superb Rehabilitation',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque',
                btn: 'LEARN MORE'
            },
    ]
    },
    appointment: {
        mainTitle: 'Make An Appointment',
        description: 'Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium dolorenque laudatium, totam rem aperiam, eaque ipsa quae ab illo invertore veritatis et quasi architecto beatae',
        cols:[
            {
                title: 'Emergency Care',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque'
            },
            {
                title: 'Expert Diagnostics',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque'
            },
            {
                title: 'Superb Rehabilitation',
                description: 'sed ut prersiciatis unde omnis iste natus error sit vopuptatem accusantium doloremque blaudantium, totam rem aperiam, eaque'
            },
    ]
    },
    departments: {
        mainTitle: 'MEDICAL DEPARTMENTS',
        btn: 'VIEW OUR DEPARTMENTS',
        departs:[
        'Cardiology',
        'Pediatrics',
        'Diabetes Care',
        'Pre-natal Care',
        'Ultrasound Enchoscardiogram'
        ]
     },
     contats: {
        mainTitle: 'CONTACT INFORMATION',
        phone: '1200.458.566',
        adress:'121 King Street, London United Kingdom',

     },
    slider: [
        {
            slide: '1-200x188.png',
            position: 0,
        },
        {
            slide: '2-200x188.png',
            position: 200
        },
        {
            slide: '3-200x188.png',
            position: 400
        },
        {
            slide: '4-200x188.png',
            position: 600
        },
    ],
    footerTop:{
        description: 'Sed ut perpiciatis unde omnis iste ratus error sit voluptatem accusantium dolemue launti totam aperiam, eaque ipsa quae abillo.Invente veritis et quasi architecto beatae luptatem accusantium, rem aperiamsiat. Voluptatem accusest etsium doloremque laudaiem. Lorem ipsum sit dolores est unser. '
    },
    mouveSlider: () => {
        store.slider.forEach(element => {
            element.position++
            if (element.position > 600) {
                element.position = -200
            }
        });

    },
    

})
