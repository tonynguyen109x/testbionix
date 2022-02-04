<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Pricing" />
        <PricingCard />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PricingCard from '../components/Pricing/PricingCard'

    export default {
        components: { 
            Navbar,
            PageTitle,
            PricingCard,
        }
    }
</script>