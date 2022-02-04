<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogTwoContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogTwoContent from '../components/BlogTwo/BlogTwoContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            BlogTwoContent,
        }
    }
</script>