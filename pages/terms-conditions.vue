<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Terms & Conditions" />
        <TermsConditionsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import TermsConditionsContent from '../components/TermsConditions/TermsConditionsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            TermsConditionsContent,
        }
    }
</script>