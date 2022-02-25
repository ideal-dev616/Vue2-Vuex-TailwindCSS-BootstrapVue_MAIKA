<template>
    <div class="overlay" :style="style">
    </div>
</template>

<style>
    .overlay {
        position: absolute;
        left: -205px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 100vw;
        height: 100vh;

        background: rgba(127, 134, 142, 0.8);
        backdrop-filter: blur(5.44px);
        z-index: 60000;    
    }

    @media (max-width: 1200px) {
        .overlay {
            left: 0px !important;
        }
    }
</style>

<script>
export default {
    props: {
        disp: { type: Boolean, default: false }  
    },
    computed: {
        style () {
            return 'display: ' + (this.disp ? 'block': 'none')
        }
    }
}
</script>

<style lang="scss">

</style>
