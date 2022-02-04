<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="bionix-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/images/logo.png" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Home <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link" exact>Home One</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-two" class="nav-link">Home Two</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-three" class="nav-link">Home Three</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-four" class="nav-link">Home Four</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-five" class="nav-link">
                                            Home Five
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-six" class="nav-link">
                                            Home Six 
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-seven" class="nav-link">
                                            Home Seven 
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-eight" class="nav-link">
                                            Home Eight 
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/home-nine" class="nav-link">
                                            Home Nine 
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Pages <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/about-one" class="nav-link">About Us Style One</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/about-two" class="nav-link">About Us Style Two</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/team-one" class="nav-link">Team Style One</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/team-two" class="nav-link">Team Style Two</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/features" class="nav-link">Features</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/partner" class="nav-link">Partner</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/signup" class="nav-link">Signup</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/terms-conditions" class="nav-link">Terms & Conditions</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/privacy-policy" class="nav-link">Privacy Policy</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                                
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Services <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/services-one" class="nav-link">Services Style One</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/services-two" class="nav-link">Services Style Two</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/services-three" class="nav-link">Services Style Three</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/services-details" class="nav-link">Service Details</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Projects <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-one" class="nav-link">Projects Style One</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-two" class="nav-link">Projects Style Two</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-three" class="nav-link">Projects Style Three</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-four" class="nav-link">Projects Style Four</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-details" class="nav-link">Project Details</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/shop" class="nav-link">Shop</NuxtLink>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Blog <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-one" class="nav-link">Blog Grid</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-two" class="nav-link">Blog Right Sidebar</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-details" class="nav-link">Blog Details</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                            </li>
                        </ul>

                        <div class="others-options">
                            <div class="cart-items">
                                <NuxtLink to="/cart">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>{{cart.length}}</span>
                                </NuxtLink>
                            </div>

                            <div class="option-item">
                                <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                                    <i class="search-btn flaticon-search"></i>
                                </div>
                            </div>

                            <div class="search-overlay" v-if="isSearch">
                                <div class="d-table">
                                    <div class="d-table-cell">
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>
                                        
                                        <div class="search-overlay-close" v-on:click="isSearchMethod(isSearch)">
                                            <span class="search-overlay-close-line"></span>
                                            <span class="search-overlay-close-line"></span>
                                        </div>

                                        <div class="search-overlay-form">
                                            <form>
                                                <input type="text" class="input-search" placeholder="Search here...">
                                                <button type="submit"><i class="flaticon-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="burger-menu" v-b-modal.modal-1>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <SidebarModal />
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarModal from '../layouts/SidebarModal'
    export default {
            name: 'Navbar',
            components: {
                SidebarModal
            },
            data(){
                return {
                    isSticky: false,
                    isSearch: false
                }
            },

            mounted(){
                const that = this
                window.addEventListener('scroll', () => {
                    let scrollPos = window.scrollY
                    if(scrollPos >= 100){
                        that.isSticky = true
                    } else {
                        that.isSticky = false
                    }
                })
            },

            computed: {
                cart(){
                    return this.$store.getters.cart
                }
            },

            methods: {
                isSearchMethod(isSearch){
                    return this.isSearch = !isSearch
                }
            }
    }
</script>