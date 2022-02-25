<template>
    <div class="mb-8">
        <div class="w-full flex items-center mb-6">
            <span class="text-nowrap mr-8 f-18-22 c-1">#{{ actionIndex + 1 }} Action</span>
            <v-select :options="actions" placeholder="select action to take" label="title" class="select-with-image w-full" @input="changeAction($event)" :value="actions[actionType]">
                <template slot="option" slot-scope="option">
                    <img :src="option.image" width="22px" height="22px"/>{{ option.title }}
                </template>
                <template slot="selected-option" slot-scope="option" :value="option.level">
                    <img :src="option.image" width="22px" height="22px" />{{ option.title }}
                </template>
            </v-select>
            <!-- <feather-icon icon="XCircleIcon" class="ml-4 cursor-pointer" :style="[{'color': '#C03221'}, actionIndex==0 ? {'visibility': 'hidden'}: {}]" @click="removeAction" /> -->
            <feather-icon icon="XCircleIcon" class="ml-4 cursor-pointer" style="color: #C03221" @click="removeAction" />
        </div>
        <div v-if="actionType == 0">
            <action-first-row v-for="(one_row, index) in firstChildren" :key="index" :rowIndex="index" :content="one_row" :isLastIndex="index == firstChildren.length - 1" v-bind.sync="firstReaction" />
        </div>
        
        <div v-if="actionType == 1">
            <div class="flex">
                <search-field placeholder="search by Sound effect name" />
                <b-button class="ml-4" variant="primary">SEARCH</b-button>
                <feather-icon icon="XCircleIcon" class="ml-4 cursor-pointer" style="color: #C03221; visibility: hidden" />
            </div>
            <div class="f-18-22 c-1 h-44 flex items-center mt-2">
                Results:
            </div>
            <div class="flex pl-4 pt-1 items-center">
                <img :src="require('@/assets/images/svg/music.svg')" >
                <span class="f-18-22 h-44 ml-4 flex items-center c-1 w-full ">Car Honking</span>
                <img :src="require('@/assets/images/svg/play.svg')" >
                <b-button variant="outline-primary" class="ml-12 f-14-17 h-41">SELECT</b-button>
                <feather-icon icon="XCircleIcon" class="ml-4 cursor-pointer" style="color: #C03221; visibility: hidden" />
            </div>
        </div>

        <div v-if="actionType == 2">            
            <action-third-row  v-for="(child, index) in thirdChildren" :key="index" :rowIndex="index" :device="child.device" :iotAction="child.iotAction" :isLastIndex="index == thirdChildren.length - 1" v-bind.sync="thirdReaction" />
        </div>

        <div v-if="actionType == 3">
        </div>
        
    </div>
</template>

<script>
import vSelect from 'vue-select'
import ActionFirstRow from './ActionFirstRow.vue'
import ActionThirdRow from './ActionThirdRow.vue'
import SearchField from './SearchField.vue'


export default {
    data() {
        return {
            actions: [
                {
                  value: 0,
                  title:"MAIKA respond",
                  image: require('@/assets/images/svg/maika-respond.svg')
                },
                {
                  value: 1,
                  title:"Play Sound effect",
                  image: require('@/assets/images/svg/play-sound-effect.svg')
                },
                {
                  value: 2,
                  title:"Control IoT device",
                  image: require('@/assets/images/svg/control-iot-device.svg')
                },
                {
                  value: 3,
                  title:"Remind to-do list",
                  image: require('@/assets/images/svg/remind-to-do-list.svg')
                }
            ],
            firstReaction: {
                add: false,
                remove: -1,
                change: {
                    index: -1,
                    content: '',
                },
            },
            firstChildren: [""]  ,
            thirdReaction: {
                add: false,
                remove: -1,
                changeDevice: {
                    index: -1,
                    device: '',
                },
                changeIotAction: {
                    index: -1,
                    iotAction: '',
                },
            },
            thirdChildren: [
                { device: -1, iotAction: -1 }
            ]  ,
            
             
        }
    },

    props: {
        actionIndex: { type: Number, required: true },
        actionType: { type: Number, required: true },
    },

    methods: {
        removeAction() {
            console.log("remove: ", this.actionIndex)
            this.$emit("update:remove", this.actionIndex);
        },
        changeAction: function (e) {
            this.$emit("update:change", this.actionIndex)
            this.$emit("update:changeAction", e.value)
        },
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
    },

    watch: {
        firstReaction: {
            handler: function (newReaction) {
                if (newReaction.add) {
                    newReaction.add = false
                    this.firstChildren.push("")
                }
                
                if (newReaction.remove > -1) {
                    this.firstChildren.splice(newReaction.remove, 1)
                    newReaction.remove = -1
                }

                if(newReaction.change.index > -1) {
                    this.firstChildren[newReaction.change.index] = newReaction.change.content
                    newReaction.change = {index: -1, content: ''}
                }
            },
            deep: true,
        },
        thirdReaction: {
            handler: function (newReaction) {
                if (newReaction.add) {
                    newReaction.add = false
                    this.thirdChildren.push({ device: -1, iotAction: -1 })
                }
                
                if (newReaction.remove > -1) {
                    this.thirdChildren.splice(newReaction.remove, 1)
                    newReaction.remove = -1
                }
                
                if(newReaction.changeDevice.index > -1) {
                    this.thirdChildren[newReaction.changeDevice.index].device = newReaction.changeDevice.device
                    newReaction.changeDevice = {index: -1, device: -1}
                }

                if(newReaction.changeIotAction.index > -1) {
                    this.thirdChildren[newReaction.changeIotAction.index].iotAction = newReaction.changeIotAction.iotAction
                    newReaction.changeIotAction = {index: -1, iotAction: -1}
                }

            },
            deep: true,
        },
    },

    components: {
        'v-select': vSelect,
        'action-first-row': ActionFirstRow,
        'action-third-row': ActionThirdRow,
        'search-field': SearchField,
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/_form.scss"
</style>
