<template>
    <div class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contact Info</h3>

                        <ul class="footer-contact-info">
                            <li>
                                <i class="flaticon-phone-call"></i>
                                <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                <a href="tel:1235421457852">+123 54214 578 52</a>
                            </li>
                            <li>
                                <i class="flaticon-email"></i>
                                <span>Do You Have a Question?</span>
                                <a href="mailto:hello@bionix.com">hello@bionix.com</a>
                            </li>
                            <li>
                                <i class="flaticon-social-media"></i>
                                <span>Socials Network</span>

                                <ul class="social">
                                    <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Quick Links</h3>

                        <ul class="footer-quick-links">
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li><NuxtLink to="/about-one">About</NuxtLink></li>
                            <li><NuxtLink to="/blog-one">Blog</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Services</NuxtLink></li>
                            <li><NuxtLink to="/features">Features</NuxtLink></li>
                            <li><NuxtLink to="/contact">Support</NuxtLink></li>
                            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                            <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                            <li><NuxtLink to="/projects-one">Projects</NuxtLink></li>
                            <li><NuxtLink to="/contact">Support</NuxtLink></li>
                            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                            <li><NuxtLink to="/team-one">Team</NuxtLink></li>
                            <li><NuxtLink to="/contact">Support</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-footer-widget pl-5">
                        <h3>Instagram</h3>

                        <ul class="footer-instagram-post">
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-1.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-2.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-3.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-4.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-5.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-6.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-7.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-8.jpg" alt="image">
                            </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">
                                <img src="~/assets/images/instagram/instagram-1.jpg" alt="image">
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-md-6">
                        <p>Copyright &copy; 2021 Bionix. All rights reserved <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>

                    <div class="col-lg-6 col-sm-6 col-md-6">
                        <ul>
                            <li><NuxtLink to="/terms-conditions">Terms & Conditions</NuxtLink></li>
                            <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'Footer'
    }
</script>