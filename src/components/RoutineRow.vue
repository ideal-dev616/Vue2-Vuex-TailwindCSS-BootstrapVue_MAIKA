<template>
    <div class="grid grid-cols-12 gap-4 routine-row flex items-center">
        <div class="user-avatar-info flex items-center overflow-hidden col-span-5 flex items-center">
            <div>
                <p-check class="p-icon p-smooth ml-6 p-check-22">
                    <i slot="extra" class="icon mdi mdi-check">
                        <feather-icon icon="CheckIcon" svgClasses="h-4 w-4 cursor-pointer text-success" class="hover:text-danger"/>
                    </i>
                </p-check>
            </div>
            <div class="con-avatars flex items-center">
                <vs-avatar :src="contact.photoURL" size="55px" />                            
            </div>
            <div class="user-info flex flex-col truncate">
                <span>{{ contact.displayName }}</span>
                <span class="user-position">{{ contact.position }}</span>
            </div>
        </div>

        <div class="col-span-3">
            <div class="w-full flex mb-1">
                <img :src="devices[contact.device].image" class="mr-2">
                {{ devices[contact.device].title }}
            </div>
            <div class="w-full flex ml-8">
                <img v-if="contact.recognized" :src="require('@/assets/images/svg/recognize-face-camera.svg')" class="mr-2"/>
                <img v-if="contact.raise" :src="require('@/assets/images/svg/raise-either-hand-up.svg')" style="margin-right: 10px"/>
            </div>
        </div>

        <div class="col-span-3 flex items-center">
            <img v-for="action in contact.actions" :key="action" :src="actions[action].image" class="mr-2"/>
        </div>

        <div class="col-span-1 detail flex flex-col items-center" @click="goEdit">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70707 0.29289L7.70707 6.2929C8.09757 6.6834 8.09757 7.3166 7.70707 7.7071L1.70707 13.7071C1.31657 14.0976 0.683375 14.0976 0.292875 13.7071C-0.097625 13.3166 -0.097625 12.6834 0.292875 12.2929L5.58577 7L0.292875 1.70711C-0.097625 1.31658 -0.097625 0.68342 0.292875 0.29289C0.683375 -0.09763 1.31657 -0.09763 1.70707 0.29289Z" fill="#243443"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            devices: [
                {
                  value: 0,
                  title:"Entry Door",
                  image: require('@/assets/images/svg/camera.svg')
                },
                {
                  value: 1,
                  title:"Image 2",
                  image: require('@/assets/images/portrait/small/avatar-s-5.jpg')
                },
                {
                  value: 2,
                  title:"Image 3",
                  image: require('@/assets/images/portrait/small/avatar-s-4.jpg')
                }
            ],
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
        }
    },

    props: {
        contact: { type: Object,  required: true },
    },

    methods: {
        goEdit() {
            this.$emit("update:value", true)
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/_routineRow.scss";
@import "@/assets/scss/vuexy/extraComponents/_form.scss";
</style>
