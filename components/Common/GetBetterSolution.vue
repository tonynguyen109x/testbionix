<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="solution-area ptb-100 extra-pb">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="solution-content">
                            <span class="sub-title">Watch Our Video</span>
                            <h2>Get Better Solution For Your Business</h2>
                            <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                            <NuxtLink to="/contact" class="default-btn">Contact Us <span></span></NuxtLink>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
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
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
    
    export default {
        name: 'GetBetterSolution',
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