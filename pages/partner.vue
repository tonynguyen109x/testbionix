<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Partner" />
        <PartnerContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PartnerContent from '../components/Partner/PartnerContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            PartnerContent,
        }
    }
</script>