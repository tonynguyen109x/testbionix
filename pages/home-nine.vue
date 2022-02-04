<template>
    <div>
        <NavbarStyleTwo />
        <MainBannerEight />
        <AllProjects />
        <FunFacts />
        <SomeLovelyFeedbackTwo />
        <OurAffordablePricing />
        <OurExpertTeam />
        <LetsGetToWork />
        <OurLovingClients />
        <GetOnlyNewUpdateTwo class="bg-white" />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import MainBannerEight from '../components/HomeNine/MainBannerEight'
    import AllProjects from '../components/HomeNine/AllProjects'
    import FunFacts from '../components/Common/FunFacts'
    import SomeLovelyFeedbackTwo from '../components/Common/SomeLovelyFeedbackTwo'
    import OurAffordablePricing from '../components/HomeNine/OurAffordablePricing'
    import OurExpertTeam from '../components/Common/OurExpertTeam'
    import LetsGetToWork from '../components/Common/LetsGetToWork'
    import OurLovingClients from '../components/Common/OurLovingClients'
    import GetOnlyNewUpdateTwo from '../components/Common/GetOnlyNewUpdateTwo'

    export default {
        components: { 
            NavbarStyleTwo,
            MainBannerEight,
            AllProjects,
            FunFacts,
            SomeLovelyFeedbackTwo,
            OurAffordablePricing,
            OurExpertTeam,
            LetsGetToWork,
            OurLovingClients,
            GetOnlyNewUpdateTwo,
        }
    }
</script>