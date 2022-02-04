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
                        <h2>Start your free trial</h2>

                        <form class="newsletter-form">
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="email">
                            <button type="submit">Sign Up Free</button>
                        </form>

                        <p class="help-text">Test out the Machine Learning features for 14 days, no credit card required.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StartYourFreeTrial'
    }
</script>