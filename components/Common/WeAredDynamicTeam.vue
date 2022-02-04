<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="about-area-two ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-12">
                        <div class="about-image">
                            <img src="~assets/images/about-img-2.jpg" alt="image" class="rounded-10">

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
                    <div class="col-lg-7 col-md-12">
                        <div class="about-content">
                            <div class="section-title text-left">
                                <span class="sub-title">About Us</span>
                                <h2>We are Dynamic Team of SEO Agency</h2>
                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                            <div class="about-text">
                                <h4>Who We Are</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div class="about-text">
                                <h4>Our History</h4>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                            </div>
                            <div class="about-text">
                                <h4>Our Mission</h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
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
        name: 'WeAredDynamicTeam',
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