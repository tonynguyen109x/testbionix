<template>
    <carousel
        :autoplay = true
        :loop = true
        :paginationEnabled = false
        :perPageCustom = "[[0, 1], [576, 2], [768, 3]]"
        :perPage="1"
        :navigationEnabled = true
        navigationNextLabel="<i class='flaticon-right-chevron'></i>"
        navigationPrevLabel="<i class='flaticon-left-chevron'></i>"
        class="team-slider owl-carousel owl-theme"
    >
        <slide>
            <div class="single-team-box">
                <div class="image">
                    <img src="~/assets/images/team/team-10.jpg" alt="team">

                    <div class="social">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="content">
                    <h3>John Smith</h3>
                    <span>CEO & Founder</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-team-box">
                <div class="image">
                    <img src="~/assets/images/team/team-11.jpg" alt="team">

                    <div class="social">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="content">
                    <h3>Lucy Eva</h3>
                    <span>Backend Team Leader</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-team-box">
                <div class="image">
                    <img src="~/assets/images/team/team-12.jpg" alt="team">

                    <div class="social">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="content">
                    <h3>Steven Smith</h3>
                    <span>Frontend Team Leader</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-team-box">
                <div class="image">
                    <img src="~/assets/images/team/team-13.jpg" alt="team">

                    <div class="social">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="content">
                    <h3>Steven Smith</h3>
                    <span>Web Developer</span>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-team-box">
                <div class="image">
                    <img src="~/assets/images/team/team-14.jpg" alt="team">

                    <div class="social">
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="content">
                    <h3>Williams Smith</h3>
                    <span>Web Developer</span>
                </div>
            </div>
        </slide>
    </carousel>
</template>