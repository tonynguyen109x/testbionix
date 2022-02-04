<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Features" />
        <CreativeSolutions />
        <WeAlwaysTryToUnderstand />
        <FunFacts />
        <WePartnerWithCompanies />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CreativeSolutions from '../components/Features/CreativeSolutions'
    import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
    import FunFacts from '../components/Common/FunFacts'
    import WePartnerWithCompanies from '../components/Common/WePartnerWithCompanies'

    export default {
        components: { 
            Navbar,
            PageTitle,
            CreativeSolutions,
            WeAlwaysTryToUnderstand,
            FunFacts,
            WePartnerWithCompanies,
        }
    }
</script>