<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="IT Services" />
        <OverViewTwo />
        <OurServicesTwo />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import OverViewTwo from '../components/ServicesTwo/OverViewTwo'
    import OurServicesTwo from '../components/ServicesTwo/OurServicesTwo'

    export default {
        components: { 
            Navbar,
            PageTitle,
            OverViewTwo,
            OurServicesTwo,
        }
    }
</script>