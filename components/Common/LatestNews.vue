<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Latest News</h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink to="/blog-details"><img src="~/assets/images/blog/blog-1.jpg" alt="image"></NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: <NuxtLink to="/blog-details">Sarah Taylor</NuxtLink></li>
                                    <li>June 24, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">How to Boost your Digital Marketing Agency</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <NuxtLink to="/blog-details" class="read-more-btn">Read More <i class="flaticon-right-arrow"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink to="/blog-details"><img src="~/assets/images/blog/blog-2.jpg" alt="image"></NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: <NuxtLink to="/blog-details">James Anderson</NuxtLink></li>
                                    <li>June 26, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">The Rise of Smarketing and Why You Need It</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <NuxtLink to="/blog-details" class="read-more-btn">Read More <i class="flaticon-right-arrow"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink to="/blog-details"><img src="~/assets/images/blog/blog-3.jpg" alt="image"></NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: <NuxtLink to="/blog-details">Steven Smith</NuxtLink></li>
                                    <li>June 25, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">How to Use Music to Boost Your Business</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <NuxtLink to="/blog-details" class="read-more-btn">Read More <i class="flaticon-right-arrow"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'LatestNews'
    }
</script>