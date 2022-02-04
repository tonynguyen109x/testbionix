<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team Style Two" />
        <TeamCard />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import TeamCard from '../components/TeamTwo/TeamCard'

    export default {
        components: { 
            Navbar,
            PageTitle,
            TeamCard,
        }
    }
</script>