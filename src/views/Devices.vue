<template>
    <div id="devices-main-panel">
        <div class="flex grid lg:grid-cols-12 lg:gap-x-10">
            <div class="flex col-span-12 mt-4">
                <b-button variant="success" class="bottom-btn create flex items-center mr-8" @click="show_popup_location">
                    <feather-icon icon="PlusCircleIcon"/>
                    NEW LOCATION
                </b-button>
                <b-button variant="primary" class="bottom-btn create flex items-center ml-1" @click="show_popup_device">
                    <feather-icon icon="PlusCircleIcon"/>
                    NEW DEVICE
                </b-button>
            </div>
            <div class="f-28-34 col-span-12">
                @ MAIN OFFICE
            </div> 
            <div v-for="device in devices" :key="device.value" class="col-span-2">
                <device-card :_device="device" />
            </div>

            <div class="col-span-2">
                <device-card :_device="{type: 'add_btn'}" v-bind.sync="disp_popup" />
            </div>
        </div>
        <create-new-location :disp="disp_popup.location" v-bind.sync="disp_popup"/>
        <create-new-device :disp="disp_popup.device" v-bind.sync="disp_popup"/>        
    </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import vSelect from 'vue-select'
import UserItem from '../components/UserItem.vue'
import RoutineRow from '../components/RoutineRow.vue'
import moduleChat          from '@/store/chat/moduleChat.js'
import { contacts } from './data'
import DeviceCard from '../components/DeviceCard.vue'
import Overlay from '../components/Overlay.vue'
import CreateNewLocation from '../components/CreateNewLocation.vue'
import CreateNewDevice from '../components/CreateNewDevice.vue'

export default {
  data () {
    return {
        disp_popup: {
            location: false,
            device: false,
        },
        devices: [
                    {
                        value: 0,
                        title:"Camera HANET - Entry Door",
                        image: require('@/assets/images/devices/device-1.png'),
                        // image: require('@/assets/images/svg/device-1.svg'),
                        type: "CAMERA AI - HANET",
                        location: "Entry Door"
                    },
                    {
                        value: 1,
                        title:"Image 2",
                        image: require('@/assets/images/devices/device-1.png'),
                        type: "CAMERA AI - HANET",
                        location: "Warehouse"
                    },
                    {
                        value: 2,
                        title:"Image 3",
                        image: require('@/assets/images/devices/device-2.png'),
                        type: "SMART CEILING FAN",
                        location: "Meeting Room"
                    }
                ],
    }
  },
  
  components: {
      'device-card': DeviceCard,
      'overlay': Overlay,
      'create-new-location': CreateNewLocation,
      'create-new-device': CreateNewDevice,
  },

  methods: {
    show_popup_location() {
        this.disp_popup.location = true
    },
    show_popup_device() {
        this.disp_popup.device = true
    },
  },
  
  watch: {
      disp_popup: {
                handler: function (new_disp_popup) {
                    console.log("== new: ", new_disp_popup)
                },
                deep: true,
            },
  }
}

</script>

<style lang="scss">
    .f-28-34 {
        margin-top: 37px;
        margin-bottom: 17px;
    }

    button svg {
        margin-right: 10px;
    }

    .btn-secondary:not(.bottom-btn) {
        background-color: #1AA053;
    }

    .btn-primary {
        background-color: #0A65FF;
    }
</style>

<style lang="scss">
  @import "@/assets/scss/vuexy/extraComponents/_form.scss";
  @import "@/assets/scss/vuexy/extraComponents/_button.scss";
  @import "@/assets/scss/vuexy/extraComponents/_select.scss";
</style>
