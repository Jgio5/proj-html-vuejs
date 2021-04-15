Vue.config.devtools = true

var app = new Vue({
    el: "#app",
    data: {
        navs: [
            'Home',
            'Pages',
            'Courses',
            'Features',
            'Blog',
            'Shop'
        ],
        footerExplores: [
            'Start here',
            'Success story',
            'Blog',
            'Courses',
            'About us',
            'Contact us'
        ],
        footerInformations: [
            'Membership',
            'Purchase guide',
            'Privacy policy',
            'Terms of service'
        ],
        offices: [
            {
                street: '382 NE 191st St # 87394 Miami, Fl 33179-3899',
                hours: '+1(305)547-9909(9am - 5pm EST,Monday - Friday)',
                email: 'support@maxcoach.com'
            }
        ],
        headerIcons: [
            'fab fa-twitter',
            'fab fa-facebook-f',
            'fab fa-instagram',
            'fab fa-linkedin'
        ],
        footerIcons: [
            'fab fa-facebook-square',
            'fab fa-facebook-f',
            'fab fa-instagram',
            'fab fa-linkedin'
        ]
    },

    methods: {
    }
})
