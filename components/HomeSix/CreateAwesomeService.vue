<template>
    <div class="seo-featured-services pt-100 pb-70 gray-bg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="section-title text-left">
                        <span class="sub-title">Featured services</span>
                        <h2>Create Awesome Service with our Tools</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="service-card-one bg-white center">
                                <div class="icon">
                                    <i class="bx bx-conversation"></i>
                                    <i class='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <NuxtLink to="/services-details">SEO Consultancy</NuxtLink>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="service-card-one bg-white center">
                                <div class="icon">
                                    <i class='bx bx-bar-chart-alt-2'></i>
                                    <i class='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <NuxtLink to="/services-details">Marketing Analysis</NuxtLink>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="service-card-one bg-white center">
                                <div class="icon">
                                    <i class='bx bx-search-alt'></i>
                                    <i class='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <NuxtLink to="/services-details">Website Optimization</NuxtLink>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-6">
                            <div class="service-card-one bg-white center">
                                <div class="icon">
                                    <i class='bx bx-mail-send'></i>
                                    <i class='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <NuxtLink to="/services-details">Email Marketing</NuxtLink>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateAwesomeService'
    }
</script>