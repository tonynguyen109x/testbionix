<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Details" />
        <ProjectsDetailsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProjectsDetailsContent from '../components/ProjectsDetails/ProjectsDetailsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ProjectsDetailsContent,
        }
    }
</script>