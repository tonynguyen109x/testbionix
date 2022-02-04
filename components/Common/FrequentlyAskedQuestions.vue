<template>
    <div class="faq-area ptb-100 bg-f4f7fe">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">FAQ</span>
                <h2>Frequently Asked Questions</h2>
                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="faq-img pr-3">
                        <img src="~/assets/images/faq.png" alt="Image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="faq-accordion">
                        <ul class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-8 variant="info"><i class="fas fa-plus bg-optional"></i>Which material types can you work with?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-9 variant="info"><i class="fas fa-plus"></i>Is Smart Lock required for instant apps?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-10 variant="info"><i class="fas fa-plus bg-optional"></i>Can I have multiple activities in a single feature?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-11 variant="info"><i class="fas fa-plus"></i>Which material types can you work with?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-12 variant="info"><i class="fas fa-plus bg-optional"></i>Why Choose Our Services In Your Business?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-12" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-13 variant="info"><i class="fas fa-plus"></i>How To Get Start With Us?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-13" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FrequentlyAskedQuestions'
    }
</script>