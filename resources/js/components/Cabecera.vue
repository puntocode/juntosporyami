<template>
    <header class="cabecera bg-yellow" :class="cabecera">
        <Navbar />
        <div class="container h-100">
            <slot></slot>
        </div>
    </header>
</template>

<script>
    import Navbar from './Navbar'
    export default {
        props: ['cabecera'],
        components: { Navbar },
    }


</script>


