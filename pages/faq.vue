<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="FAQ" />
        <FrequentlyAsked />
        <FaqContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import FrequentlyAsked from '../components/Faq/FrequentlyAsked'
    import FaqContent from '../components/Faq/FaqContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            FrequentlyAsked,
            FaqContent,
        }
    }
</script>