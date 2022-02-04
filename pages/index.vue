<template>
    <div>
        <Navbar />
        <MainBanner />
        <OurFeaturedServices class="pt-40" />
        <Partner />
        <AmazingBusinessSolution />
        <WeAlwaysTryToUnderstand />
        <FunFacts />
        <WeveDoneLotsOfWork />
        <MeetOurAwesomeTeam />
        <GetBetterSolution />
        <SomeLovelyFeedback />
        <ChooseYourBestPlan />
        <GetOnlyNewUpdate />
        <OurLatestNews />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import MainBanner from '../components/HomeOne/MainBanner'
    import OurFeaturedServices from '../components/Common/OurFeaturedServices'
    import Partner from '../components/Common/Partner'
    import AmazingBusinessSolution from '../components/Common/AmazingBusinessSolution'
    import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
    import FunFacts from '../components/Common/FunFacts'
    import WeveDoneLotsOfWork from '../components/Common/WeveDoneLotsOfWork'
    import MeetOurAwesomeTeam from '../components/Common/MeetOurAwesomeTeam'
    import GetBetterSolution from '../components/Common/GetBetterSolution'
    import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
    import ChooseYourBestPlan from '../components/Common/ChooseYourBestPlan'
    import GetOnlyNewUpdate from '../components/Common/GetOnlyNewUpdate'
    import OurLatestNews from '../components/Common/OurLatestNews'

    export default {
        components: { 
            Navbar,
            MainBanner,
            OurFeaturedServices,
            Partner,
            AmazingBusinessSolution,
            WeAlwaysTryToUnderstand,
            FunFacts,
            WeveDoneLotsOfWork,
            MeetOurAwesomeTeam,
            GetBetterSolution,
            SomeLovelyFeedback,
            ChooseYourBestPlan,
            GetOnlyNewUpdate,
            OurLatestNews,
        }
    }
</script>