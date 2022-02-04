<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="services-details-overview">
                <div class="services-details-desc">
                    <h3>Digital Marketing</h3>
                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                    <div class="features-text">
                        <h4><i class="flaticon-tick"></i> Core Development</h4>
                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>

                    <div class="features-text">
                        <h4><i class="flaticon-tick"></i> Define Your Choices</h4>
                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div class="services-details-image wow fadeInUp">
                    <img src="~/assets/images/about-img-1.png" alt="image">
                </div>
            </div>

            <div class="services-details-overview">
                <div class="services-details-image wow fadeInUp">
                    <img src="~/assets/images/why-choose-img-1.png" alt="image">
                </div>

                <div class="services-details-desc">
                    <h3>Social Media Marketing</h3>
                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                    <div class="services-details-accordion">
                        <ul class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-1 variant="info"><i class="fas fa-plus bg-optional"></i>Which Material Types Can You Work With?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-2 variant="info"><i class="fas fa-plus"></i>Is Smart Lock Required for Instant Apps?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-3 variant="info"><i class="fas fa-plus bg-optional"></i>Can I Have Multiple Activities in a Single feature?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
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
        name: 'ServicesDetailsContent'
    }
</script>