<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Style Four" />
        <AllProjectsFour />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import AllProjectsFour from '../components/ProjectsFour/AllProjectsFour'

    export default {
        components: { 
            Navbar,
            PageTitle,
            AllProjectsFour,
        }
    }
</script>