<template>
    <div class="partner-area ptb-100 pb-0">
        <div class="container">
            <div class="section-title">
                <h2>Our Loving Clients</h2>
            </div>

            <ClientCarouselTwo />
        </div>
    </div>
</template>

<script>
import ClientCarouselTwo from '../Carousels/ClientCarouselTwo'
export default {
    name: 'OurLovingClientsTwo',
    components: {
        ClientCarouselTwo
    }
}
</script>