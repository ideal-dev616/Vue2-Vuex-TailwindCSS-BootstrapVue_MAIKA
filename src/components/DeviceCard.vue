<template>
    <vx-card>
        <div v-if="_device.type == 'add_btn'" class="device-card add_btn">
            <div class="flex justify-content-center">
                <b-button class="new-device" @click="show_popup_device">
                    <img :src="require('@/assets/images/svg/plus-circle-new-device.svg')">
                </b-button>
            </div>
            <div class="f-24-29-400 flex justify-content-center">
                New Device
            </div>
        </div>
        <div v-else class="device-card">
            <div>
                <img :src="_device.image" height="109px" class="mx-auto">
            </div>
            <div class="mt-4 mb-1 f-13-16">
                {{ _device.type }}
            </div>
            <div class="mb-4 f-24-29-400">
                {{ _device.location }}
            </div>
            <div class="flex justify-content-center">
                <b-button class="bottom-btn flex items-center">
                    <feather-icon icon="SettingsIcon" />
                    CONFIGURE
                </b-button>
            </div>
        </div>
    </vx-card>
</template>

<style>
    .device-card {
        padding: 2px 8px !important;        
    }

    .device-card.add_btn {
        padding-top: 70px !important;
        padding-bottom: 40px !important;
    }

    .vx-card__body {
        padding-top: 0px !important;
    }

    button.new-device {
        width: 97px;
        height: 97px;
        background-color: transparent !important;
        border: none;
        padding: 0px; 
    }
</style>

<script>
export default {
  props: {
    _device: { type: Object, default: false }
  },
  methods: {
      show_popup_device() {
          console.log("device card: clicked")
          this.$emit("update:device", true)
      }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/_form.scss"
</style>
