<template>
    <div>
        <Navbar />
        <PageTitle :pageTitle="product.name" />
        <ProductDetailsContent 
            :id = "product.id"
            :name = "product.name" 
            :price = "product.price"
            :oldPrice = "product.oldPrice"
            :image = "product.image"
        />
    </div>
</template>

<script>
    import Navbar from '../../layouts/Navbar'
    import PageTitle from '../../components/Common/PageTitle'
    import ProductDetailsContent from '../../components/ProductDetails/ProductDetailsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ProductDetailsContent,
        },

        data() {
            return {
                text: '',
                message: '',
                id: this.$route.params.id
            }
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

        computed: {
            product(){
                return this.$store.state.products.all.find(product => product.id === this.id);
            }
        }
    }
</script>