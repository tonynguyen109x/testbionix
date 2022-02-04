<template>
    <client-only>
        <div class="cart-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="cart-table table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody v-if="cart.length > 0">
                                    <tr v-for="(cart, i) in cart" :key="i">
                                        <td class="product-thumbnail">
                                            <nuxt-link :to="`/products-details/${cart.id}`">
                                                <img :src="cart.image" :alt="cart.name" />
                                            </nuxt-link>
                                        </td>

                                        <td class="product-name">
                                            <nuxt-link :to="`/products-details/${cart.id}`">
                                                {{cart.name}}
                                            </nuxt-link>
                                        </td>

                                        <td class="product-price">
                                            <span class="unit-amount">${{cart.price}}</span>
                                        </td>

                                        <td class="product-quantity">
                                            <div class="input-counter">
                                                <span 
                                                    @click="onDecrement(cart.id, cart.quantity)"
                                                    class="minus-btn">
                                                    <i class="fas fa-minus"></i>
                                                </span>
                                                    {{cart.quantity}}
                                                <span 
                                                    @click="onIncrement(cart.id)" 
                                                    class="plus-btn">
                                                    <i class="fas fa-plus"></i>
                                                </span>
                                            </div>
                                        </td>

                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">
                                                ${{cart.price * cart.quantity}}
                                            </span>

                                            <a 
                                                href="javascript:void(0)" 
                                                @click="removeItemFromCart(cart.id)" 
                                                class="remove"
                                            >
                                                <i class="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div class="cart-buttons">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-sm-7 col-md-7">
                                    <div class="shopping-coupon-code">
                                        <input type="text" class="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code">
                                        <button type="submit">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cart-totals">
                            <h3>Cart Totals</h3>

                            <ul>
                                <li>Subtotal <span>${{cartTotal}}</span></li>
                                <li>Shipping <span>$1.00</span></li>
                                <li>Total <span><b>${{parseFloat(cartTotal + 1).toFixed(2)}}</b></span></li>
                            </ul>
                            <nuxt-link to="/checkout" class="default-btn">
                                Proceed to Checkout
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        name: 'CartContent',

        computed: {
            cart(){
                return this.$store.getters.cart
            },
            cartTotal(){
                return this.$store.getters.totalAmount
            }
        }, 
        methods: {
            removeItemFromCart(id){
                this.$store.dispatch('deleteCart', id)
            },
            onIncrement(id){
                this.$store.dispatch('updateCart', {
                    id,
                    unit: 1,
                    cart: this.cart
                })
            },
            onDecrement(id, quantity){
                if (quantity > 1) {
                    this.$store.dispatch('updateCart', {
                        id,
                        unit: -1,
                        cart: this.cart
                    })
                } else {
                    this.removeItemFromCart(id);
                    this.$toast.warning("Item deleted!");
                }
            },
        }
    }
</script>