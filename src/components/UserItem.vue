<template>
    <div :class="[
        'user-item',
        'flex',
        'items-center',
        narrow?'narrow': ''
    ]">
        <div class="user-avatar-info w-full flex items-center overflow-hidden">
            <div class="con-avatars">
                <vs-avatar :src="contact.photoURL" :badge="narrow? 'a': 'badge'" :badge-color="contact.status" badge-position="bottom-right" size="50px" />                            
            </div>
            <div class="user-info flex flex-col truncate">
                <span>{{ contact.displayName }}</span>
                <span class="user-position">{{ contact.position }}</span>
            </div>

        </div>
        <div v-if="!narrow">
            <div class="detail flex flex-col items-end">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70707 0.29289L7.70707 6.2929C8.09757 6.6834 8.09757 7.3166 7.70707 7.7071L1.70707 13.7071C1.31657 14.0976 0.683375 14.0976 0.292875 13.7071C-0.097625 13.3166 -0.097625 12.6834 0.292875 12.2929L5.58577 7L0.292875 1.70711C-0.097625 1.31658 -0.097625 0.68342 0.292875 0.29289C0.683375 -0.09763 1.31657 -0.09763 1.70707 0.29289Z" fill="#243443"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    contact          : { type: Object,  required: true },
    // isActiveChatUser : { type: Boolean },
    // lastMessaged     : { type: String,  default : '' },
    // showLastMsg      : { type: Boolean, default: false },
    // unseenMsg        : { type: Number,  default : 0 }
    narrow: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/_useritem.scss"
</style>
