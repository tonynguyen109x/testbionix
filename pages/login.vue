<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Login" />
        <LoginContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import LoginContent from '../components/Login/LoginContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            LoginContent
        }
    }
</script>