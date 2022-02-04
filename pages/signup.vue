<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Sign up" />
        <SignupContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import SignupContent from '../components/Signup/SignupContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            SignupContent,
        }
    }
</script>