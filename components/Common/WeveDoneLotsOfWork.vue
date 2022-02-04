<template>
    <div class="projects-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Project Gallery</span>
                <h2>We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
            </div>
        </div>

        <div class="container-fluid">
            <ProjectCarousel />
        </div>
    </div>
</template>

<script>
import ProjectCarousel from '../Carousels/ProjectCarousel'
export default {
    name: 'WeveDoneLotsOfWork',
    components: {
        ProjectCarousel
    }
}
</script>