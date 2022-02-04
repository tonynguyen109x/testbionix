<template>
    <carousel
        :autoplay = true
        :loop = true
        :paginationEnabled = true
        :perPageCustom = "[[0, 1], [576, 2], [768, 2], [1200, 3]]"
        class="feedback-slides owl-carousel owl-theme"
    >
        <slide>
            <div class="single-feedback-item">
                <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>

                <div class="client-info">
                    <img src="~/assets/images/clients/client-1.jpg" alt="image">

                    <h3>Jason Roy</h3>
                    <span>Manager</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-feedback-item">
                <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>

                <div class="client-info">
                    <img src="~/assets/images/clients/client-2.jpg" alt="image">

                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-feedback-item">
                <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>

                <div class="client-info">
                    <img src="~/assets/images/clients/client-3.jpg" alt="image">

                    <h3>Sarah Taylor</h3>
                    <span>Designer</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-feedback-item">
                <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>

                <div class="client-info">
                    <img src="~/assets/images/clients/client-4.jpg" alt="image">

                    <h3>Steven Smith</h3>
                    <span>Manager</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-feedback-item">
                <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>

                <div class="client-info">
                    <img src="~/assets/images/clients/client-5.jpg" alt="image">

                    <h3>Tom Nessham</h3>
                    <span>EnvyTheme</span>
                </div>
            </div>
        </slide>
    </carousel>
</template>