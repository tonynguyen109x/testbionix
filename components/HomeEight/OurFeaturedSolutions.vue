<template>
    <div class="pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">What We Offer</span>
                <h2>Our Featured Solutions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="featured-solution-card">
                        <i class='bx bxs-analyse'></i>
                        <h3>
                            <NuxtLink to="/about-two">Robotic Automation</NuxtLink>
                        </h3>
                        <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <NuxtLink to="/about-two" class="read-more">Discover More</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="featured-solution-card">
                        <i class='bx bx-shape-circle'></i>
                        <h3>
                            <NuxtLink to="/about-two">Cognitive Automation</NuxtLink>
                        </h3>
                        <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <NuxtLink to="/about-two" class="read-more">Discover More</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="featured-solution-card">
                        <i class='bx bx-badge-check'></i>
                        <h3>
                            <NuxtLink to="/about-two">Security & Surveillance</NuxtLink>
                        </h3>
                        <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <NuxtLink to="/about-two" class="read-more">Discover More</NuxtLink>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="featured-solution-card">
                        <i class='bx bx-layer'></i>
                        <h3>
                            <NuxtLink to="/about-two">Cognitive Engagement</NuxtLink>
                        </h3>
                        <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <NuxtLink to="/about-two" class="read-more">Discover More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurFeaturedSolutions'
    }
</script>