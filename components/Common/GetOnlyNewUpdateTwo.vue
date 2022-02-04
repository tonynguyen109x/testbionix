<template>
    <div class="subscribe-area ptb-100 pt-0 bg-F4F7FC">
        <div class="container">
            <div class="subscribe-inner-area">
                <div class="subscribe-content">
                    <span class="sub-title">Get Started Instantly!</span>
                    <h2>Get only new update from this newsletter</h2>

                    <form class="newsletter-form" data-toggle="validator">
                        <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off">

                        <button type="submit">Subscribe</button>
                        <div id="validator-newsletter" class="form-result"></div>
                    </form>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
        <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'GetOnlyNewUpdateTwo'
    }
</script>