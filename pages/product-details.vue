<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Product Details" />
        <ProductDetailsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ProductDetailsContent,
        },

        methods:{
            send(){
                this.message = this.text
                this.text = ''
            }
        },

        provide() {
            return { myText: 'Product Details'}
        },

        data() {
            return {
                text: '',
                message: '',
            }
        }
    }
</script>