<template>
    <div class="feedback-area feedback-area-two ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2>Some Lovely Feedback From Our Clients</h2>
            </div>
        </div>

        <FeedbackCarouselTwo />
    </div>
</template>

<script>
import FeedbackCarouselTwo from '../Carousels/FeedbackCarouselTwo'
export default {
    name: 'SomeLovelyFeedbackTwo',
    components: {
        FeedbackCarouselTwo
    }
}
</script>