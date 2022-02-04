<template>
    <div class="featured-services-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Services</span>
                <h2>Our Featured Services</h2>
                <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-featured-box">
                        <div class="icon">
                            <i class="flaticon-analytics"></i>
                        </div>

                        <h3>Marketing Analysis</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                        <NuxtLink to="/services-details" class="default-btn">Read More <span></span></NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-featured-box">
                        <div class="icon color-facd60">
                            <i class="flaticon-mail"></i>
                        </div>

                        <h3>Email Marketing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                        <NuxtLink to="/services-details" class="default-btn">Read More <span></span></NuxtLink>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-featured-box">
                        <div class="icon color-1ac0c6">
                            <i class="flaticon-research"></i>
                        </div>

                        <h3>Website Optimization</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                        <NuxtLink to="/services-details" class="default-btn">Read More <span></span></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurFeaturedServices',
    }
</script>