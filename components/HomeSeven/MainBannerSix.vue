<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="saas-banner-two">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container mt-50">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="banner-content">
                                    <h1>Manage Your Digital Marketing in One Place Bionix</h1>
                                    <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                                    
                                    <div class="banner-btn">
                                        <NuxtLink to="/contact" class="default-btn mr-3">
                                            Get Started <span></span>
                                        </NuxtLink>
            
                                        <NuxtLink to="/services-one" class="default-btn-two">
                                            Try It Now <span></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="saas-banner-image animate-tb">
                                    <img src="~/assets/images/saas-banner.png" alt="image">

                                    <div class="solution-video">
                                        <a 
                                            class="video-btn popup-youtube"
                                            v-for="(image, imageIndex) in items"
                                            :key="imageIndex"
                                            @click="index = imageIndex"
                                            style="cursor: pointer"
                                        >
                                            <i class="flaticon-play-button"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Shape Images -->
            <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
            <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
            <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
            <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
            <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
            <div class="shape-img7"><img src="~/assets/images/shape/shape-7.png" alt="image"></div>
            <div class="shape-img8"><img src="~/assets/images/shape/shape-8.png" alt="image"></div>
            <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
            <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
        </div>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        name: 'MainBannerSix',
        components: { CoolLightBox },
        data: function () {
            return {
                items: [
                    {
                        src: 'https://www.youtube.com/watch?v=bk7McNUjWgw',
                    }
                ],
                index: null
            };
        },
    }
</script>