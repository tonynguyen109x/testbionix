<template>
    <div class="projects-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Project Gallery</span>
                <h2>We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
            </div>
        </div>

        <div class="container-fluid">
            <div class="projects-slides owl-carousel owl-theme">
                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/1.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">Digital Marketing</NuxtLink></h3>
                        <span class="category">Design</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/2.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">Design & Development</NuxtLink></h3>
                        <span class="category">Planing</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/3.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">Strategic Planing</NuxtLink></h3>
                        <span class="category">Marketing</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/4.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">SEO Consultancy</NuxtLink></h3>
                        <span class="category">Development</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/5.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">Competitor Analysis</NuxtLink></h3>
                        <span class="category">Design</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="single-projects-box">
                    <img src="~/assets/images/projects-image/6.jpg" alt="image">

                    <div class="projects-content">
                        <h3><NuxtLink to="/projects-details">Social Media Marketing</NuxtLink></h3>
                        <span class="category">Development</span>
                    </div>

                    <div class="plus-icon">
                        <NuxtLink to="/projects-details">
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects'
    }
</script>