<template>
    <div class="flex items-center my-notify">
        <span class="ml-4">{{ text }}</span>
        <feather-icon icon="XIcon" style="position: absolute !important; right: 10px" @click="close"/>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SearchField from './SearchField.vue'
import Vue from 'vue'
import FeatherIcon from './FeatherIcon.vue'
// import { useToast } from "vue-toastification"

export default {
    data() {
        return {
        }
    },
    props: {
        text: { type: String, required: true },
    },
    computed: {
        style () {
            return 'display: ' + (this.disp ? 'block': 'none')
        }
    },
    methods: {    
        close() {
            console.log("== close")
            this.$emit("update:show", false)
        }  
    },
    components: {
    },
}
</script>

<style>
    .vue-notification-group {
        z-index: 62000 !important;
        width: 650px !important;;
        height: 60px !important;
    }
    /* .vue-notification {
        } */
    .my-notify {
        align-items: center;
        background: #D1ECDD;
        border-left: 5px solid #12703A;
        font-size: 16px;
        line-height: 28px;  
        color: #12703A;
        top: calc( 50vh - 30px ) !important;
        left: calc( 50% - 320px ) !important;
        height: 60px;
        width: 640px;
        z-index: 63000 !important;
        position: absolute;
    }
</style>



<style lang="scss">

</style>
