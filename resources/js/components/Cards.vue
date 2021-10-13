<template>
    <section class="bg-gray">
        <div class="container py-5">
            <div class="row py-4">
                <div class="col-12 text-center">
                    <h2>Ayúdame</h2>
                    <p>Nuestra meta es alcanzar <strong>30.000$ USD.</strong> para poder cubrir los costos del tratamiento. Por favor espero contar con tu ayuda!! 🙏</p>
                </div>

                <div class="col-md-4 mt-4 px-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img class="py-3" :src="`${asset}images/icons/tigo-money.svg`" width="150" alt="logo de vision banco">
                            <h4>Giros Tigo</h4>
                            <ul class="lista mb-4">
                                <p>Podes girar o hacer una carga de billetera este número</p>
                                <p class="h4 color-yellow">0984 840 849</p>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4 px-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img class="py-3" :src="`${asset}images/icons/vision-logo.svg`" width="150" alt="logo de vision banco">
                            <h4>Transferencias</h4>
                            <ul class="lista mb-4">
                                <li>Cuenta Visión Banco</li>
                                <li>Yamile Estigarribia</li>
                                <li><strong>C.I. N°</strong> 5.332.859</li>
                                <li>Cuenta N° 17521158</li>
                            </ul>
                        </div>
                    </div>
                </div>

                   <div class="col-md-4 mt-4 px-3">
                    <div class="card shadow-sm text-white bg-warning">
                        <div class="card-body text-center">
                            <img class="py-3" :src="`${asset}images/icons/paypal-logo.svg`" width="150" alt="logo de vision banco">
                            <h4 class="font-font-weight-bold">Donaciones</h4>
                            <p>Podes donar con tu tarjeta de crédito o a traves de Paypal</p>
                            <a href="#" @click="donar" class="btn btn-block btn-white">Donar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                asset: window.asset,
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
    .card{ border: 0; border-radius: 15px;
        .lista{padding: 0; list-style-type: none;}
    }
</style>
