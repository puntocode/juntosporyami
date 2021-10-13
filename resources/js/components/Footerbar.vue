<template>
    <footer class="bg-dark py-5 text-center">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4"><img :src="`${asset}images/logo/logo-inverso.svg`" alt="logo inverso" width="200"></div>
                <div class="col-12 my-4 d-flex justify-content-center">
                    <a href="https://www.instagram.com/juntosporyami/" target="_blank" class="mx-3"><img :src="`${asset}images/icons/icon-instagram.svg`" alt="icono de facebook" height="30"></a>
                    <a href="https://www.facebook.com/yami.estigarribia" target="_blank" class="mx-3"><img :src="`${asset}images/icons/icon-facebook.svg`" alt="icono de facebook" height="30"></a>
                    <a href="https://twitter.com/Yestigarribiaa" target="_blank" class="mx-3"><img :src="`${asset}images/icons/icon-twitter.svg`" alt="icono de facebook" height="30"></a>
                    <a href="#" target="_blank" class="mx-3"><img :src="`${asset}images/icons/icon-youtube.svg`" alt="icono de facebook" height="30"></a>
                </div>
                <div class="col-12">
                    <ul class="d-flex flex-column flex-md-row justify-content-center">
                        <li><router-link to="/" class="lista">Home</router-link></li>
                        <li><router-link to="#" class="lista">Historia</router-link></li>
                        <li><router-link to="#" class="lista">Eventos</router-link></li>
                        <li><router-link to="#" class="lista">Donar</router-link></li>
                        <li><router-link to="#" class="lista">Contacto</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
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
    footer{ border-top: 3px solid #FDB513;
        ul{ list-style: none; padding: 0;
            .lista{color: #fff; margin:15px; font-size: 1.2rem;}
        }
    }
</style>
