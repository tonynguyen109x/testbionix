<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Cart" />
        <CartContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CartContent from '../components/Cart/CartContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            CartContent,
        }
    }
</script>