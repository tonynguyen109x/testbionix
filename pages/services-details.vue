<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services Details" />
        <ServicesDetailsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesDetailsContent from '../components/ServicesDetails/ServicesDetailsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ServicesDetailsContent,
        }
    }
</script>