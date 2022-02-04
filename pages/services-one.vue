<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services" />
        <TheKeyToYourMotivationsuccess />
        <ProvideAwesomeServices />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import TheKeyToYourMotivationsuccess from '../components/ServicesOne/TheKeyToYourMotivationsuccess'
    import ProvideAwesomeServices from '../components/ServicesOne/ProvideAwesomeServices'

    export default {
        components: { 
            Navbar,
            PageTitle,
            TheKeyToYourMotivationsuccess,
            ProvideAwesomeServices,
        }
    }
</script>