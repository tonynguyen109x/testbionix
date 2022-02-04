<template>
    <div class="page-title-area page-title-bg1">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="page-title-content">
                        <h2>{{pageTitle}}</h2>

                        <ul>
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li>{{pageTitle}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
        <div class="shape-img7"><img src="~/assets/images/shape/shape-7.png" alt="image"></div>
        <div class="shape-img8"><img src="~/assets/images/shape/shape-8.png" alt="image"></div>
        <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
        <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
    </div>
</template>

<script>
    export default {
        props: ['pageTitle'],
    }
</script>