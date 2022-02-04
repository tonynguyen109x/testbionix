<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="SEO Services" />
        <ServicesCard />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ServicesCard from '../components/ServicesThree/ServicesCard'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ServicesCard,
        }
    }
</script>