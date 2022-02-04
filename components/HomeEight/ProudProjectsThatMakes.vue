<template>
    <section class="projects-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Projects</span>
                    <h2>Proud Projects That Make Us Stand Out</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="container">
                <ProjectCarouselTwo />
            </div>
        </section>
</template>

<script>
import ProjectCarouselTwo from '../Carousels/ProjectCarouselTwo'
export default {
    name: 'ProudProjectsThatMakes',
    components: {
        ProjectCarouselTwo
    }
}
</script>