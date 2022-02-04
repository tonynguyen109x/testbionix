<template>
    <div class="product-details-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="product-details-image">
                        <img src="~/assets/images/shop/shop-2.jpg" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="product-details-desc">
                        <h3>{{name}}</h3>

                        <div class="price">
                            <span class="new-price">${{price}}</span>
                            <span class="old-price">${{oldPrice}}</span>
                        </div>

                        <div class="product-review">
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="rating-count">3 reviews</div>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                        <div class="product-add-to-cart">
                            <div class="input-counter">
                                <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                                {{quantity}}
                                <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                            </div>

                            <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                                <i class="fas fa-cart-plus"></i> Already Added 
                            </button>

                            <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                        </div>

                        <div class="buy-checkbox-btn">
                            <div class="item">
                                <input class="inp-cbx" id="cbx" type="checkbox">
                                <label class="cbx" for="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>I agree with the terms and conditions</span>
                                </label>
                            </div>

                            <div class="item">
                                <a href="javascript:void(0)" class="btn btn-light">Buy it now!</a>
                            </div>
                        </div>

                        <div class="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div class="payment-methods">
                                <img src="~/assets/images/payment/payment-1.svg" alt="image">
                                <img src="~/assets/images/payment/payment-2.svg" alt="image">
                                <img src="~/assets/images/payment/payment-3.svg" alt="image">
                                <img src="~/assets/images/payment/payment-4.svg" alt="image">
                                <img src="~/assets/images/payment/payment-5.svg" alt="image">
                                <img src="~/assets/images/payment/payment-6.svg" alt="image">
                                <img src="~/assets/images/payment/payment-7.svg" alt="image">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="products-details-tab">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="tab_content">
                                    <b-tabs content-class="mt-3">
                                        <b-tab title="Description">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>
                                                </div>
                                            </div>
                                        </b-tab>
                                        
                                        <b-tab title="Additional information">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <ul class="additional-information">
                                                        <li><span>Brand:</span> ThemeForest</li>
                                                        <li><span>Color:</span> Brown</li>
                                                        <li><span>Size:</span> Large, Medium</li>
                                                        <li><span>Weight:</span> 27 kg</li>
                                                        <li><span>Dimensions:</span> 16 x 22 x 123 cm</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </b-tab>

                                        <b-tab title="Reviews">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <div class="product-review-form">
                                                        <h3>Customer Reviews</h3>

                                                        <div class="review-title">
                                                            <div class="rating">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="far fa-star"></i>
                                                            </div>
                                                            <p>Based on 3 reviews</p>

                                                            <a href="#" class="default-btn">Write a Review <span></span></a>
                                                        </div>

                                                        <div class="review-comments">
                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2020</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>

                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2020</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>

                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2020</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>
                                                        </div>

                                                        <div class="review-form">
                                                            <h3>Write a Review</h3>

                                                            <form>
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <input type="email" id="email" name="email" placeholder="Enter your email" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <div class="form-group">
                                                                            <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <div class="form-group">
                                                                            <textarea name="review-body" id="review-body" cols="30" rows="7" placeholder="Write your comments here" class="form-control"></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <button type="submit" class="default-btn">Submit Review <span></span></button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <RelatedProducts />
    </div>
</template>

<script>
    import RelatedProducts from '../ProductDetails/RelatedProducts'
    export default {
        name: 'productdetailscontent',
        components: {
            name: 'RelatedProducts'
        },
        data(){
            return {
                getExistPId: false,
                quantity: 1
            }
        },
        props: ['id', 'name', 'price', 'oldPrice', 'image' ],
        computed: {
            cart(){
                return this.$store.getters.cart
            }
        },
        methods: {
            addToCart(){
                const product = [{
                    id: this.id,
                    name: this.name,
                    price: this.price,
                    image: this.image,
                    quantity: this.quantity
                }]

                if(this.cart.length > 0){
                    let id = this.id 
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
                        this.getExistPId = true
                        this.$toast.info("Already added to the cart");
                    }
                } else {
                    this.$store.dispatch('addToCart', product)
                    this.$toast("Added to cart",{
                        icon: 'fas fa-cart-plus'
                    });
                }
            },
            increaseQuantity(){
                if(this.quantity > 9){
                    this.$toast("Can't add more than 10",{
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.quantity++
                }
            },
            decreaseQuantity() {
                if(this.quantity < 2){
                    this.$toast("Can't add less than 1",{
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.quantity--;
                }
            },
        }
    }
</script>