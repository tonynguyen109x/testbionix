<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <AboutText />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import AboutText from '../components/AboutOne/AboutText'

    export default {
        components: { 
            Navbar,
            PageTitle,
            AboutText,
        },
    }
</script>