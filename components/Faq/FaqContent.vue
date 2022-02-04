<template>
    <div class="faq-contact-area ptb-100 pt-0">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Contact Us</span>
                <h2>Do You Have Any Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-4 col-md-4">
                    <div class="faq-contact-image">
                        <img src="~/assets/images/contact.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-8 col-md-8">
                    <div class="faq-contact-form">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" required placeholder="Name">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required placeholder="Email">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required class="form-control" placeholder="Phone">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required placeholder="Subject">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn">Send Message <span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FaqContent'
    }
</script>