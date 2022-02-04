<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            PrivacyPolicyContent,
        }
    }
</script>