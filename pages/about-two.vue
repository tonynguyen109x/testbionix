<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <WeAredDynamicTeam />
        <AboutFunFacts />
        <EngagingNew class="pt-100" />
        <GetBetterSolution />
        <SomeLovelyFeedback />
        <OurExpertTeam class="pt-0" />
        <GetOnlyNewUpdatefrom />
        <WePartnerWithCompaniessizes />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import WeAredDynamicTeam from '../components/Common/WeAredDynamicTeam'
    import AboutFunFacts from '../components/AboutTwo/AboutFunFacts'
    import EngagingNew from '../components/AboutTwo/EngagingNew'
    import GetBetterSolution from '../components/Common/GetBetterSolution'
    import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
    import OurExpertTeam from '../components/Common/OurExpertTeam'
    import GetOnlyNewUpdatefrom from '../components/AboutTwo/GetOnlyNewUpdatefrom'
    import WePartnerWithCompaniessizes from '../components/AboutTwo/WePartnerWithCompaniessizes'

    export default {
        components: { 
            Navbar,
            PageTitle,
            WeAredDynamicTeam,
            AboutFunFacts,
            EngagingNew,
            GetBetterSolution,
            SomeLovelyFeedback,
            OurExpertTeam,
            GetOnlyNewUpdatefrom,
            WePartnerWithCompaniessizes,
        }
    }
</script>