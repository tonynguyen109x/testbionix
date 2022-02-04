<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Contact" />
        <ContactContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ContactContent from '../components/Contact/ContactContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ContactContent,
        }
    }
</script>