export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Bionix - Vue Strapi Digital Agency & Startup Template',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.min.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/fontawesome.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/style.css',
        '~/assets/css/responsive.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-cool-lightbox', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false },
    ], 

    /*
    ** Globally configure <nuxt-link> default active class.
    */
    router: {
        linkActiveClass: 'active'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true
        }
    }
}
