<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Shop" />
        <ShopContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ShopContent from '../components/Shop/ShopContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ShopContent,
        }
    }
</script>