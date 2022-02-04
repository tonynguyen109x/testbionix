<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="project-details-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="project-details-image">
                            <img src="~/assets/images/projects/projects-5.jpg" alt="projects">

                            <div 
                                class="popup-youtube project-video"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                style="cursor: pointer"
                            >
                                <i class="flaticon-play-button"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="project-details-image">
                            <img src="~/assets/images/projects/projects-6.jpg" alt="projects">

                            <div 
                                class="popup-youtube project-video"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                style="cursor: pointer"
                            >
                                <i class="flaticon-play-button"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="projects-details-desc">
                            <h3>Competitor Analysis</h3>

                            <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>

                            <div class="features-text">
                                <h4><i class="flaticon-tick"></i> Core Development</h4>
                                <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>

                            <div class="features-text">
                                <h4><i class="flaticon-tick"></i> Define Your Choices</h4>
                                <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>

                            <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                            <div class="project-details-info">
                                <div class="single-info-box">
                                    <h4>Client</h4>
                                    <span>James Anderson</span>
                                </div>

                                <div class="single-info-box">
                                    <h4>Category</h4>
                                    <span>Network, Marketing</span>
                                </div>

                                <div class="single-info-box">
                                    <h4>Date</h4>
                                    <span>February 28, 2020</span>
                                </div>

                                <div class="single-info-box">
                                    <h4>Share</h4>
                                    <ul class="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="single-info-box">
                                    <a href="#" target="_blank" class="default-btn">Live Preview <span></span></a>
                                </div>
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
        name: 'ProjectsDetailsContent',
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