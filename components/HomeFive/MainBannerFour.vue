<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="it-banner">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container mt-50">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="banner-content">
                                    <h1>Secure IT Solutions for a More Secure Environment!</h1>
                                    <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                                    
                                    <div class="banner-btn">
                                        <NuxtLink to="/contact" class="default-btn mr-3">
                                            Get Started <span></span>
                                        </NuxtLink>
                
                                        <a 
                                            class="video-btn popup-youtube"
                                            v-for="(image, imageIndex) in items"
                                            :key="imageIndex"
                                            @click="index = imageIndex"
                                            style="cursor: pointer"
                                        >
                                            <i class="flaticon-play-button"></i> 
                                            Play Video
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <carousel
                                    :autoplay = true
                                    :loop = true
                                    :paginationEnabled = false
                                    :perPageCustom = "[[0, 1]]"
                                    class="it-banner-image owl-carousel owl-theme"
                                >
                                    <slide>
                                        <div class="animate-image">
                                            <img src="~/assets/images/it-banner/animate-img.jpg" alt="image">
                                        </div>
                                    </slide>
                                        
                                    <slide>
                                        <div class="animate-image">
                                            <img src="~/assets/images/it-banner/animate-img2.jpg" alt="image">
                                        </div>
                                    </slide>
                                </carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
            <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
            <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
            <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
            <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
            <div class="shape-img7"><img src="~/assets/images/shape/shape-7.png" alt="image"></div>
            <div class="shape-img8"><img src="~/assets/images/shape/shape-8.png" alt="image"></div>
            <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
            <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
            <div class="shape-img11"><img src="~/assets/images/shape/shape-11.png" alt="image"></div>
            <div class="shape-img12"><img src="~/assets/images/shape/shape-12.png" alt="image"></div>
        </div>
    </div>  
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
    
    export default {
        name: 'MainBannerFour',
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