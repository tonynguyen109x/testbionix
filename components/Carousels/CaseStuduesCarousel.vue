<template>
    <carousel
        :autoplay = true
        :loop = true
        :paginationEnabled = false
        :perPageCustom = "[[0, 1], [576, 2], [930, 3], [1200, 4]]"
        :perPage="1"
        :navigationEnabled = true
        navigationNextLabel="<i class='flaticon-right-chevron'></i>"
        navigationPrevLabel="<i class='flaticon-left-chevron'></i>"
        class="work-slider owl-carousel owl-theme"
    >
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-1.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">SEO Optimization</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">Designing a better cinema experience</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>
    
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-2.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">Digital Marketing</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">Building design process within teams</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>
        
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-3.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">Keyword Targeting</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">How intercom brings play eCommerce</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-4.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">Email Marketing</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">How to start a project with Reactjs</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>
    
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-5.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">Marketing & Reporting</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">Examples of different types of sprints</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>
        
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-6.jpg" alt="image">
                
                <div class="content text-center">
                    <span>
                        <NuxtLink to="/projects-details">Development</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/projects-details">Redesigning the New York times app</NuxtLink>
                    </h3>
                        
                    <NuxtLink class="work-btn" to="/projects-details">Case Study</NuxtLink>
                </div>
            </div>
        </slide>
    </carousel>
</template>