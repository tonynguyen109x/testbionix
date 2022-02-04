<template>
    <client-only>
        <div class="checkout-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="user-actions">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>Returning customer? <a href="/login">Click here to login</a></span>
                        </div>
                    </div>z
                </div>

                <form>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="billing-details">
                                <h3 class="title">Billing Details</h3>

                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Full Name <span class="required">*</span></label>
                                            <input type="text" id="fullName" v-model="personDetails.fullName" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Address <span class="required">*</span></label>
                                            <input type="text" id="address" v-model="personDetails.address" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Town / City <span class="required">*</span></label>
                                            <input type="text" id="city" v-model="personDetails.city" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Email Address <span class="required">*</span></label>
                                            <input type="email" id="email" v-model="personDetails.email" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Phone <span class="required">*</span></label>
                                            <input type="text" id="phone" v-model="personDetails.phone" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="order-details">
                                <h3 class="title">Your Order</h3>

                                <div class="order-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="(cart, i) in cart" :key="i">
                                                <td class="product-name">
                                                    <nuxt-link :to="`/products-details/${cart.id}`">
                                                        {{cart.name}}
                                                    </nuxt-link>
                                                </td>

                                                <td class="product-total">
                                                    <span class="subtotal-amount">${{cart.price * cart.quantity}}</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="order-subtotal">
                                                    <span>Cart Subtotal</span>
                                                </td>

                                                <td class="order-subtotal-price">
                                                    <span class="order-subtotal-amount">${{cartTotal}}</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="order-shipping">
                                                    <span>Shipping</span>
                                                </td>

                                                <td class="shipping-price">
                                                    <span>$1.00</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="total-price">
                                                    <span>Order Total</span>
                                                </td>

                                                <td class="product-subtotal">
                                                    <span class="subtotal-amount">${{parseFloat(cartTotal + 10).toFixed(2)}}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="payment-box">
                                    <div class="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                                            <label for="direct-bank-transfer">Direct Bank Transfer</label>

                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </p>
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group">
                                            <label for="paypal">PayPal</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group">
                                            <label for="cash-on-delivery">Cash on Delivery</label>
                                        </p>
                                    </div>

                                    <a 
                                        href="javascript:void(0)" 
                                        @click="add" 
                                        class="default-btn order-btn"
                                    >
                                        Place Order <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </client-only>
</template>

<script>
    export default {
        name: 'CheckOutContent',
        data(){
            return{
                personDetails: {
                    fullName: 'John Doe', 
                    address: 'Town hall, av 02',
                    city: 'New York',
                    email: 'john@gmail.com',
                    phone: '+990198378372',
                    createdAt: new Date()
                }
            }
        },
        computed: {
            cart(){
                return this.$store.getters.cart
            },
            cartTotal(){
                return this.$store.getters.totalAmount
            }
        }, 
        methods: {
            add(){
                this.$toast.success(`Thanks for the order`, {
                    icon: 'fas fa-cart-plus'
                });
                this.$store.dispatch('cartEmpty')
                this.$router.push("/");
            }
        }
    }
</script>