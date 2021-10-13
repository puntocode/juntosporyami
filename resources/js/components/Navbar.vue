<template>
    <div class="navbar-area bg-ligth">
        <nav class="navbar navbar-expand-md navbar-light bg-trasnparent w-100 py-3 fixed-top bg-yellow" id="navbar">
            <div class="container">
                <a href="#" class="navbar-brand text-uppercase">
                    <img :src="`${asset}images/logo/juntos-por-yami.svg`" alt="logo" height="30">
                    <!-- <img class="d-md-none" :src="`${asset}images/logo/logo-fondo-blanco.svg`" alt="logo" height="30"> -->
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100 justify-content-end">
                        <li class="nav-item">
                            <router-link to="/" class="text-dark nav-link">INICIO</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="text-dark nav-link">HISTORIA</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link to="/#" class="text-dark nav-link">DONAR</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link to="/#" class="text-dark nav-link">EVENTOS</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link to="/#" class="text-dark nav-link">CONTACTO</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                asset: window.asset
            }
        },
    }
</script>

<style lang="scss" scoped>
    .router-link-exact-active{color: #fff !important}
    @media (max-width:992px) {
        .navbar-light .navbar-toggler {
            border-color: transparent !important;
        }
    }
</style>
