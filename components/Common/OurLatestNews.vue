<template>
    <div class="blog-area ptb-100 bg-F4F7FC">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Latest News</span>
                <h2>Our Latest Articles And News For Our Clients</h2>
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
                                    <li>By: <a href="/blog-one">Sarah Taylor</a></li>
                                    <li>June 24, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">How To Boost Your Digital Marketing Agency</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                    <li>By: <a href="/blog-one">James Anderson</a></li>
                                    <li>June 26, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">The Rise Of Smarketing And Why You Need It</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                    <li>By: <a href="/blog-one">Steven Smith</a></li>
                                    <li>June 25, 2020</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">How To Use Music To Boost Your Business</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
        name: 'OurLatestNews'
    }
</script>