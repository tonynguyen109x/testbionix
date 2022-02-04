<template>
    <div class="works-area ptb-100 gray-bg">
        <div class="container-fluid">
            <div class="section-title">
                <span class="sub-title">Projects</span>
                <h2>Our Case Studies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <CaseStuduesCarousel />
        </div>
    </div>
</template>

<script>
import CaseStuduesCarousel from '../Carousels/CaseStuduesCarousel'
export default {
    name: 'OurCaseStudies',
    components: {
        CaseStuduesCarousel
    }
}
</script>