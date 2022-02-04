<template>
    <div class="works-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our Latest Works</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-1.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">
                                    Development
                                </NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    Designing a better cinema experience
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-2.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">
                                    Web Design
                                </NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    Building design process within teams
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-3.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">
                                    eCommerce
                                </NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    How intercom brings play eCommerce
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-4.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">React</NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    How to start a project with Reactjs
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-5.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">Angular</NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    Examples of different types of sprints
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="work-card">
                        <img src="~/assets/images/works/work-6.jpg" alt="image">
                        
                        <div class="content text-center">
                            <span>
                                <NuxtLink to="/projects-details">Development</NuxtLink>
                            </span>
                            <h3>
                                <NuxtLink to="/projects-details">
                                    Redesigning the New York times app
                                </NuxtLink>
                            </h3>
                                
                            <NuxtLink class="work-btn" to="/projects-details">
                                Case Study
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="more-work">
                <NuxtLink to="/projects-two" class="default-btn">
                    View More Project <span></span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurLatestWorks'
    }
</script>