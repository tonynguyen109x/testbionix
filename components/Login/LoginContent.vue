<template>
    <div class="ptb-100">
        <div class="container">
            <div class="row align items center">
                <div class="col-lg-6">
                    <div class="form-content">
                        <div class="form-header">
                            <h3>Login</h3>
                            <p>If you have an account with us, please log in.</p>
                        </div>

                        <form>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" id="your-email" placeholder="Your email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" id="your-password" placeholder="Your password">
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-6 text-right">
                                    <a class="form-link right" href="#">Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" class="default-btn">Login</button>
                        </form>

                        <div class="form-footer">
                            <p>Don’t have an account? <NuxtLink class="form-link" to="/signup">Signup</NuxtLink></p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <img src="~/assets/images/why-choose-img-1.png" alt="Images">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginContent'
    }
</script>