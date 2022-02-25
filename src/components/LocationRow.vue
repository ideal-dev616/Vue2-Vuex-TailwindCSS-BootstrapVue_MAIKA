<template>
    <div class="pl-6 flex items-center c-black my-location-row" :style="divStyle" @click="selectedThis">        
        <feather-icon icon="HomeIcon" class="cursor-pointer pl-1 svg-w-35" :style="iconStyle"/>
        <span class="ml-4 f-16-19 h-44 flex items-center" :style="textStyle">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

        props: {
            title: { type: String, required: true },
            selected: { type: Boolean, required: true },
            rowIndex: { type: Number, required: true },
        },

        methods: {
            selectedThis() {
                this.$emit("update:index", this.rowIndex)
            }
        },

        computed: {
            divStyle() {
                return this.selected? 'background-color: #3A57E8 !important; color: white !important': ''
            },
            iconStyle() {
                return this.selected? "color: white; width:42px; height: 38px": "color: black; width: 39px; height: 35px; margin-left: 3px"
            },
            textStyle() {
                return this.selected? "color: white;": ""
            },
        },

        watch: {
        },

        components: {
        }
    }
</script>

<style lang="scss">
    .my-location-row {
        height: 55px !important;

        span {
            font-weight: 600;
        }

        svg {
            width: 100% !important;
            height: 100% !important;
        }
    }
</style>


<style lang="scss">
    @import "@/assets/scss/vuexy/extraComponents/_form.scss"
</style>
