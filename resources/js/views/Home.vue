<template>
    <div>
        <cabecera cabecera="cabecera-home">
            <div class="hero h-100">
                <div class="row align-items-center h-100">
                    <div class="col-lg-5 d-none d-lg-block">
                        <img :src="`${asset}images/portada.webp`" alt="foto portada" class="foto-portada">
                    </div>
                    <div class="col-lg-7 wow animate__fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                        <h1 class="wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                            <span>YAMI</span> <span class="text-nos">nos</span><span class="d-block">NECESITA</span>
                        </h1>
                        <p>Hola Hola! soy Yami, cuento con una discapacidad motriz a causa de una lesion medular incompleta. Mi objetivo es viajar a Bangkok para realizarme un tratamiento con celulas madre y así poder mejorar mi estilo de vida.</p>
                        <button type="button" @click="donar" class="btn btn-white btn-lg btn-block wow animate__fadeInUp font-weight-bold mt-4" data-wow-duration="1s" data-wow-delay="0.8s">
                            DONAR <i class="fas fa-heart heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </cabecera>

        <!-- seccion de historia -->
        <section>
            <div class="container py-5">
                <div class="row justify-content-md-center">
                    <div class="col-lg-5 col-md-6">
                        <h2 class="color-yellow pt-md-4 pt-lg-5">Historia</h2>
                        <p>Hoy les quiero contar mi historia y que me puedan conocer un poco más.
                            Hace 5 años sufrí un accidente de tránsito en donde un señor de edad 73 años aproximadamente impactó su camioneta contra el auto
                            en donde íbamos mis amigos, la mamá de una amiga que era la que conducía y yo...
                        </p>
                        <a class="color-yellow hover-yellow text-decoration-none" href="/About">Seguir leyendo</a>
                    </div>
                    <div class="col-lg-5 col-md-6 my-4 mt-my-0 text-center">
                        <img :src="`${asset}images/historia.webp`" alt="foto historia" class="img-fluid img-his">
                    </div>
                </div>
            </div>
        </section>

        <!-- seccion de ayudanos -->
       <Cards />

       <!-- TODO: Seccion Eventos -->
       <section id="eventos">
           <div class="container py-5">
                <div class="row">
                   <div class="col-12 text-center mb-4">
                       <h2 class="color-yellow">Eventos</h2>
                       <p>Enterate de todos los eventos que realizamos para recaudar fondos!!</p>
                   </div>
                </div>
                <BoxScroll />
                <div class="row">
                    <div class="col-12 text-center my-4"><a href="#" class="color-yellow hover-yellow">Ver todos los Eventos</a></div>
                </div>
           </div>
       </section>

        <!-- seccion de contacto -->
        <section id="contact">
            <div class="container py-5">
                <div class="row text-white">
                        <div class="col-md-6">
                            <h3>Contáctame</h3>
                            <p>Escribime si tenes alguna duda o consulta!</p>
                        </div>
                        <div class="col-md-6 d-flex flex-column flex-md-row align-items-center">
                            <a class="btn btn-white w-100 py-2 mb-2 mb-md-0 mr-md-3" href="#"><i class="far fa-envelope"></i> Enviar un email</a>
                            <a class="btn btn-what w-100 py-2" href="https://wa.link/rtiilz" target="_blank"><i class="fab fa-whatsapp"></i> Contáctame por whatsapp</a>
                        </div>
                </div>
            </div>
        </section>

        <!-- TODO: Seccion marcas -->
        <section class="bg-gray">
            <div class="container py-5">
                <div class="row py-4">
                    <div class="col-12 text-center mb-4">
                        <h2>Marcas que Apoyan</h2>
                        <p>Te agradezco mucho por apoyar mi causa. <i class="fas fa-heart color-yellow"></i></p>
                    </div>
                    <Marcas />
                </div>
            </div>
        </section>



        <!-- TODO: Footer -->
        <Footerbar />
    </div>
</template>

<script>
    import Footerbar from '../components/Footerbar';
    import BoxScroll from '../components/BoxScroll';
    import Cabecera from '../components/Cabecera';
    import Marcas from '../components/Marcas';
    import Cards from '../components/Cards';

    export default {
        components: { Cabecera, Cards, BoxScroll, Footerbar, Marcas },
        data() {
            return {
                asset: window.asset
            }
        },
        methods: {
            donar() {
                this.$swal.fire('Disculpa!', 'El boton de donación estara habilitado en estos dias', 'info')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .img-his{max-height: 315px;}
    .foto-portada{margin-top: 24px; padding-left: 5rem; max-height: 600px;}
</style>

