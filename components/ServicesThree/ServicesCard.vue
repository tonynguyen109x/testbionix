<template>
    <div class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-conversation'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">SEO Consultancy</NuxtLink>
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
                            <NuxtLink to="/services-details">Website Optimization</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

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

                <div class="col-lg-4 col-sm-6">
                    <div class="service-card-one gray-bg">
                        <div class="icon">
                            <i class='bx bx-data'></i>
                            <i class='bx bxs-badge-check check-icon'></i>
                        </div>
                        <h3>
                            <NuxtLink to="/services-details">PPC Management</NuxtLink>
                        </h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="col-lg-12 col-sm-12">
                    <div class="pagination-area">
                        <a href="/services-three" class="prev page-numbers">
                            <i class="fas fa-angle-double-left"></i>
                        </a>
                        <a href="/services-three" class="page-numbers">1</a>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <a href="/services-three" class="page-numbers">3</a>
                        <a href="/services-three" class="page-numbers">4</a>
                        <a href="/services-three" class="next page-numbers">
                            <i class="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServicesCard'
    }
</script>