<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import BlogDetailsContent from '../components/BlogDetails/BlogDetailsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            BlogDetailsContent,
        },
    }
</script>