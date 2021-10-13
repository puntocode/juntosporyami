<template>
    <div>
        <Loader v-if="loading" />
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import Loader from './Loader'
    export default {
        components: { Loader },
        props: ['user'],
        data() {
            return {
                loading: true
            }
        },
        mounted () {

            document.onreadystatechange = () => {
                if(document.readyState == 'complete'){
                    this.loading = false
                }
            }
        },
    }
</script>

