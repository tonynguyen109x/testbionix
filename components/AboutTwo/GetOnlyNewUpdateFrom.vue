<template>
    <div class="free-trial-area ptb-100 bg-f4f7fe">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="ft-img">
                        <img src="~/assets/images/machine-learning/free-trial-img.png" alt="Image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="subscribe-content">
                        <span class="sub-title">Get Started Instantly!</span>
                        <h2>Get only new update from this newsletter</h2>

                        <form class="newsletter-form" data-toggle="validator">
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required>

                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GetOnlyNewUpdatefrom'
    }
</script>