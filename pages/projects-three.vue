<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Style Three" />
        <AllProjectsThree />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import AllProjectsThree from '../components/ProjectsThree/AllProjectsThree'

    export default {
        components: { 
            Navbar,
            PageTitle,
            AllProjectsThree,
        }
    }
</script>