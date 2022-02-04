<template>
    <div class="feedback-area ptb-100 bg-color">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2>Some Lovely Feedback From Our Clients</h2>
            </div>
        </div>

        <FeedbackCarousel />
    </div>
</template>

<script>
import FeedbackCarousel from '../Carousels/FeedbackCarousel'
export default {
    name: 'SomeLovelyFeedback',
    components: {
        FeedbackCarousel
    }
}
</script>