<template>
   <div class="team-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Team</span>
                <h2>Our Expert Team</h2>
            </div> 
            
            <TeamCarousel />
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
        <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
        <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
        <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
    </div>
</template>

<script>
    import TeamCarousel from '../Carousels/TeamCarousel'
    export default {
        name: 'OurExpertTeam',
        components: {
            TeamCarousel
        }
    }
</script>