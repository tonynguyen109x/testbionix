<template>
    <carousel
        :autoplay = true
        :loop = true
        :paginationEnabled = true
        :perPageCustom = "[[0, 1], [576, 2], [768, 2], [1200, 3]]"
        class="projects-slides owl-carousel owl-theme"
    >
        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-1.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">Digital Marketing</NuxtLink></h3>
                    <span class="category">Design</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-2.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">Design & Development</NuxtLink></h3>
                    <span class="category">Planing</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-3.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">Strategic Planing</NuxtLink></h3>
                    <span class="category">Marketing</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-4.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">SEO Consultancy</NuxtLink></h3>
                    <span class="category">Development</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-5.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">Competitor Analysis</NuxtLink></h3>
                    <span class="category">Design</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-6.jpg" alt="image">

                <div class="projects-content">
                    <h3><NuxtLink to="/projects-details">Social Media Marketing</NuxtLink></h3>
                    <span class="category">Development</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/projects-details" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>
    </carousel>
</template>