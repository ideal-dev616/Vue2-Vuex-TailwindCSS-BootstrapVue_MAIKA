<template>
    <div class="flex justify-between mt-2 mb-4">
        <div class="w-full ml-8 flex items-center gap-2">
            <span class="f-18-22 h-44 c-1 flex items-center">Select</span>
            <!-- <v-select :options="devices" :value="devices[device]" class="w-full" @input="changeDevice($event)" /> -->
            <v-select :options="devices" :value="devices[device]" class="w-full hidden-close-in-select" @input="changeDevice($event)" />
        
            <span class="f-18-22 h-44 c-1 flex items-center text-nowrap">and do</span>
            <v-select id="_iotAction" :options="iotActions" :value="iotActions[iotAction]" class="w-full hidden-close-in-select" @input="changeIotAction($event)"/>
            <feather-icon v-if="isLastIndex" icon="PlusCircleIcon" class="ml-4 cursor-pointer" style="color: #232D42" @click="addRow" />
            <feather-icon v-else icon="MinusCircleIcon" class="ml-4 cursor-pointer" style="color: #232D42" @click="removeRow" />
        </div>
        
    </div>
</template>

<script>
    import vSelect from 'vue-select'

    export default {
        data() {
            return {
                devices: [
                    {
                        value: 0,
                        label: "Device"
                    },
                    {
                        value: 1,
                        label: "Device 2"
                    },
                ],
                iotActions: [
                    {
                        value: 0,
                        label: "Action 1",
                    },
                    {
                        value: 1,
                        label: "Action 2",
                    },
                ]
            }
        },

        props: {
            isLastIndex: { type: Boolean, required: true },
            rowIndex: { type: Number, required: true },
            device: { type: Number, required: true },
            iotAction: { type: Number, required: true },
            
        },

        methods: {
            addRow() {
                this.$emit("update:add", true)
            },
            removeRow() {
                this.$emit("update:remove", this.rowIndex)
            },
            changeDevice(e) {
                console.log(e, e.value)
                this.$emit("update:changeDevice", {index: this.rowIndex, device: e.value})
            },
            changeIotAction(e) {
                console.log(e.value)
                this.$emit("update:changeIotAction", {index: this.rowIndex, iotAction: e.value})
            }
        },

        watch: {
            // content: {
            //     handler: function (newContent) {
            //         console.log("=== content: ", newContent)
            //         this.textValue = newContent
            //     }
            // },
        },

        components: {
            'v-select': vSelect,
        }
    }
</script>

<style lang="scss">
    .my-action-first-row {
        span:not(.feather-icon) {
            width: 100% !important;
        }
    }
</style>
