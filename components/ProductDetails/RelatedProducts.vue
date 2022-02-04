<template>
    <div class="related-products">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Shop</span>
                <h2>Related Products</h2>
            </div>

            <div class="row">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="product in products"
                    :key="product.id"
                >
                    <div class="single-product-box">
                        <div class="product-image">
                            <nuxt-link :to="`/products-details/${product.id}`">
                                <img :src="product.image" alt="image">
                                <img :src="product.imageHover" alt="image">
                            </nuxt-link>

                            <a 
                                v-if="getExistPId === product.id"
                                href="javascript:void(0)" 
                                class="add-to-cart-btn"
                                @click="addToCart(product)"
                            >
                                Added Already! <i class="flaticon-shopping-cart"></i>
                            </a>

                            <a 
                                v-else
                                href="javascript:void(0)" 
                                class="add-to-cart-btn"
                                @click="addToCart(product)"
                            >
                                Add To Cart <i class="flaticon-shopping-cart"></i>
                            </a>

                            <div v-if="product.sale" class="sale-btn">Sale!</div>
                        </div>

                        <div class="product-content">
                            <h3>
                                <nuxt-link :to="`/products-details/${product.id}`">{{product.name}}</nuxt-link>
                            </h3>
                            <div class="price">
                                <span class="new">${{product.price}}</span>
                                <span class="old">${{product.oldPrice}}</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RelatedProducts',
    data(){
            return {
                getExistPId: null
            }
        },

        computed: {
            products(){
                return this.$store.state.products.all
            },
            cart(){
                return this.$store.getters.cart
            }
        },
        methods: {
            addToCart(item){
                const product = [{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                }]

                if(this.cart.length > 0){
                    let id = item.id 
                    this.getExistPId = id
                    let cartIndex = this.cart.findIndex(cart => {
                        return cart.id == id
                    })

                    if(cartIndex == -1){
                        this.$store.dispatch('addToCart', product);
                        this.$toast("Added to cart", {
                            icon: 'fas fa-cart-plus'
                        });
                    } else {
                        this.$store.dispatch('updateCart', {
                            id, unit: 1, cart: this.cart
                        });
                        this.$toast.info("Already added to the cart and update with one");
                    }
                } else {
                    this.$store.dispatch('addToCart', product)
                    this.$toast("Added to cart",{
                        icon: 'fas fa-cart-plus'
                    });
                }
            }
        }
}
</script>