<template>
    <div class="widget-area" id="secondary">
        <div class="widget widget_search">
            <form class="search-form">
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>

        <div class="widget widget_bionix_posts_thumb">
            <h3 class="widget-title">Popular Posts</h3>

            <div class="item">
                <a href="/blog-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </a>
                <div class="info">
                    <time datetime="2020-06-30">June 10, 2020</time>
                    <h4 class="title usmall"><a href="/blog-details">Making Peace With The Feast Or Famine Of Freelancing</a></h4>
                </div>

                <div class="clear"></div>
            </div>

            <div class="item">
                <a href="/blog-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </a>
                <div class="info">
                    <time datetime="2020-06-30">June 21, 2020</time>
                    <h4 class="title usmall"><a href="/blog-details">I Used The Web For A Day On A 50 MB Budget</a></h4>
                </div>

                <div class="clear"></div>
            </div>

            <div class="item">
                <a href="/blog-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </a>
                <div class="info">
                    <time datetime="2020-06-30">June 30, 2020</time>
                    <h4 class="title usmall"><a href="/blog-details">How To Create A Responsive Popup Gallery?</a></h4>
                </div>

                <div class="clear"></div>
            </div>
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>

            <ul>
                <li><a href="/blog-one">Business</a></li>
                <li><a href="/blog-one">Privacy</a></li>
                <li><a href="/blog-one">Technology</a></li>
                <li><a href="/blog-one">Tips</a></li>
                <li><a href="/blog-one">Uncategorized</a></li>
            </ul>
        </div>
 
        <div class="widget widget_recent_entries">
            <h3 class="widget-title">Recent Posts</h3>
            <ul>
                <li><a href="/blog-one">How to Become a Successful Entry Level UX Designer</a></li>
                <li><a href="/blog-one">How to start your business as an entrepreneur</a></li>
                <li><a href="/blog-one">How to be a successful entrepreneur</a></li>
                <li><a href="/blog-one">10 Building Mobile Apps With Ionic And React</a></li>
                <li><a href="/blog-one">Protect your workplace from cyber attacks</a></li>
            </ul>
        </div>
   
        <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Tags</h3>

            <div class="tagcloud">
                <a href="/blog-one">IT <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Bionix <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Games <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Marketing <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Tips <span class="tag-link-count"> (2)</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogSidebar'
    }
</script>