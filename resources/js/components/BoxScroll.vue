<template>
    <div class="wrapper">
        <div class="item" v-for="(evento, index) in eventos" :key="index">
            <a :href="evento.url" target="_blank">
                <img :src="evento.img" :alt="`evento-${index}`" width="200">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                asset: window.asset,
                eventos: []
            }
        },
        created () {
            this.cargarEventos();
        },
        methods: {
            cargarEventos() {
                const data = [
                    {img: `${this.asset}images/eventos/5.jpg`, url: 'https://www.instagram.com/p/CUbQORxjGst/'},
                    {img: `${this.asset}images/eventos/4.jpg`, url: 'https://www.instagram.com/p/CULOOsrrCJD/'},
                    {img: `${this.asset}images/eventos/3.jpg`, url: 'https://www.instagram.com/p/CUDw7RfLDea/'},
                    {img: `${this.asset}images/eventos/2.jpg`, url: 'https://www.instagram.com/p/CTxFR08LL1y/'},
                    {img: `${this.asset}images/eventos/1.jpg`, url: 'https://www.instagram.com/p/CTfxam7Hb2w/'},
                ]
                this.eventos = data;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{max-height: 210px; display: flex; overflow-x: auto;
        .item{min-width: 200px; height: 200px; text-align: center; background-color: #ddd; margin-right: 10px;}
        &::-webkit-scrollbar{width: 0;}
    }
</style>
