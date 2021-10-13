<template>
    <div class="col-12 text-center">
        <div class="wrapper">
            <div class="item flex-fill" v-for="(marca, index) in marcas" :key="index">
                <img :src="marca.img" :alt="`evento-${index}`" width="180">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                asset: window.asset,
                marcas: []
            }
        },
        created () {
            this.cargarMarcas();
        },
        methods: {
            cargarMarcas() {
                const data = [
                    {img: `${this.asset}images/marcas/logo-puntocode.svg`},
                    {img: `${this.asset}images/marcas/logo-fisio.svg`},
                    {img: `${this.asset}images/marcas/logo-biolimpieza.svg`},
                    {img: `${this.asset}images/marcas/logo-dra-alfonzo.svg`},
                    {img: `${this.asset}images/marcas/logo-osval.svg`},
                ]
                this.marcas = data;
            }
        },
    }
</script>

<style lang="scss" scoped>
   .wrapper{max-height: 70px; display: flex; overflow-x: auto;
        .item{min-width: 180px; height: 70px; text-align: center; margin-right: 20px;}
        &::-webkit-scrollbar{width: 0;}
    }
</style>
