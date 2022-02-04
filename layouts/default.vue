<template>
    <div>
        <Preloader v-if="isLoading" />
        <Nuxt />
        <Footer />
        <BackToTop />
    </div>
</template>

<script>
    import Preloader from './Preloader'
    import Footer from './Footer'
    import BackToTop from './BackToTop'

    export default {
        components: { 
            Preloader,
            Footer,
            BackToTop
        },
        data() {
            return {
                isLoading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000)
        }
    }
</script>