<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Grid" />
        <BlogCard />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogCard from '../components/BlogOne/BlogCard'

    export default {
        components: { 
            Navbar,
            PageTitle,
            BlogCard,
        }
    }
</script>