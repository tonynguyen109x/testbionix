<template>
    <div class="pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-bullseye'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Target Analysis</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-bar-chart-alt-2'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Keyword Research</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-check-shield' ></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Continuous Testing</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-bar-chart-alt-2'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Marketing Analysis</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-search-alt'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Content Optimization</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-mail-send'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">Email Marketing</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurService'
    }
</script>