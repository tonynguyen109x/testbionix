<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team Style One" />
        <TeamContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import TeamContent from '../components/TeamOne/TeamContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            TeamContent,
        }
    }
</script>