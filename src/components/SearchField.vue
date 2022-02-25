<template>
    <b-input-group>
        <b-form-input :placeholder="placeholder" style="height: 40px !important; padding-left: 40px">
            </b-form-input>
        <feather-icon icon="SearchIcon" :style="style"/>
    </b-input-group>
</template>

<style>
    
</style>

<script>

export default {
    data() {
        return {
            
        }
    },
    props: {
        placeholder: { type: String, default: "" },
        topPosition: { type: String, default: '10px'},
        leftPosition: { type: String, default: '10px'},
        size: { type: String, default: '20px'}
    },
    computed: {
        style () {
            return 'z-index: 100; position: absolute !important; color: #6F809E; top: ' + this.topPosition + '; left: ' + this.leftPosition + '; width: ' + this.size + '; height: ' + this.size + ';' 
        }
    },
    methods: {
        // getValidationState({ dirty, validated, valid = null }) {
        //     return dirty || validated ? valid : null;
        // },
        // clickNewDevice() {
        //     this.$emit('update:device', false);
        // },
        // cancel() {
        //     this.$emit('update:device', false);
        // }        
    },
    components: {
    }   
}
</script>

<style lang="scss">

</style>
