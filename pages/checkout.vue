<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Checkout" />
        <CheckOutContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CheckOutContent from '../components/CheckOut/CheckOutContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            CheckOutContent,
        }
    }
</script>