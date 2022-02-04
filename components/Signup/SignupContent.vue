<template>
    <div class="ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="form-content">
                        <div class="form-header">
                            <h3>Create an Account</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>

                        <form>
                            <div class="form-group">
                                <label>First name</label>
                                <input type="text" class="form-control" id="first-name" placeholder="First name">
                            </div>
                            <div class="form-group">
                                <label>Last name</label>
                                <input type="text" class="form-control" id="last-name" placeholder="First name">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" id="your-email" placeholder="Your email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" id="your-password" placeholder="Your password">
                            </div>
                            <button type="submit" class="default-btn">Signup</button>
                        </form>

                        <div class="form-footer">
                            <p>Do you have an account? <NuxtLink class="form-link" to="/login">Login</NuxtLink></p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <img src="~/assets/images/signup.jpg" alt="Images">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SignupContent'
    }
</script>