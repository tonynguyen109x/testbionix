<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <carousel
            :autoplay = true
            :loop = true
            :paginationEnabled = true
            :perPageCustom = "[[0, 1]]"
            :perPage="1"
            :navigationEnabled = true
            navigationNextLabel="<i class='flaticon-right-chevron'></i>"
            navigationPrevLabel="<i class='flaticon-left-chevron'></i>"
            class="machine-learning-slider owl-carousel owl-theme"
        >
            <slide>
                <div class="machine-learning-banner ml-bg1">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container mt-80">
                                <div class="row align-items-center">
                                    <div class="col-lg-7">
                                        <div class="banner-content">
                                            <h1>World’s Leading AI & Machine Learning Company</h1>
                                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
                                            
                                            <div class="banner-btn">
                                                <NuxtLink to="/contact" class="default-btn mr-4">
                                                    Get Started <span></span>
                                                </NuxtLink>
                    
                                                <NuxtLink to="/about-two" class="default-btn-two">
                                                    Try It Free <span></span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="ml-video">
                                            <div class="solution-video">
                                                <div 
                                                    class="video-btn popup-youtube"
                                                    v-for="(image, imageIndex) in items"
                                                    :key="imageIndex"
                                                    @click="index = imageIndex"
                                                    style="cursor: pointer"
                                                >
                                                    <i class="flaticon-play-button"></i>
                                                </div>
                                            </div>
                                        </div>
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
                </div>
            </slide>

            <slide>
                <div class="machine-learning-banner ml-bg2">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container mt-80">
                                <div class="row align-items-center">
                                    <div class="col-lg-7">
                                        <div class="banner-content">
                                            <h1>Machine Learning Models For Business Process</h1>
                                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
                                            
                                            <div class="banner-btn">
                                                <NuxtLink to="/contact" class="default-btn mr-4">
                                                    Get Started <span></span>
                                                </NuxtLink>
                    
                                                <NuxtLink to="/about-two" class="default-btn-two">
                                                    Try It Free <span></span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="ml-video">
                                            <div class="solution-video">
                                                <div 
                                                    class="video-btn popup-youtube"
                                                    v-for="(image, imageIndex) in items"
                                                    :key="imageIndex"
                                                    @click="index = imageIndex"
                                                    style="cursor: pointer"
                                                >
                                                    <i class="flaticon-play-button"></i>
                                                </div>
                                            </div>
                                        </div>
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
                </div>
            </slide>

            <slide>
                <div class="machine-learning-banner ml-bg3">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container mt-80">
                                <div class="row align-items-center">
                                    <div class="col-lg-7">
                                        <div class="banner-content">
                                            <h1>Use Machine Learning To Augment Your Business Process</h1>
                                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
                                            
                                            <div class="banner-btn">
                                                <NuxtLink to="/contact" class="default-btn mr-4">
                                                    Get Started <span></span>
                                                </NuxtLink>
                    
                                                <NuxtLink to="/about-two" class="default-btn-two">
                                                    Try It Free <span></span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="ml-video">
                                            <div class="solution-video">
                                                <div 
                                                    class="video-btn popup-youtube"
                                                    v-for="(image, imageIndex) in items"
                                                    :key="imageIndex"
                                                    @click="index = imageIndex"
                                                    style="cursor: pointer"
                                                >
                                                    <i class="flaticon-play-button"></i>
                                                </div>
                                            </div>
                                        </div>
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
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
    
    export default {
        name: 'MainBannerSeven',
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