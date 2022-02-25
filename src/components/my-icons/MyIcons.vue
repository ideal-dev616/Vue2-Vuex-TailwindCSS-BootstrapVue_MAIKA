<template>
    <span class="icon">
        <assignment v-if="iconName == 'assignment'"  />
        <home v-if="iconName == 'home'" />
        <person v-if="iconName == 'person'"/>
        <settings v-if="iconName == 'settings'"/>
    </span>
</template>

<script>
import * as icons from 'vue-feather-icons'
import Assignment from './Assignment'
import Home from './Home'
import Person from './Person'
import Settings from './Settings'

export default {
//   functional:true,
  name: 'my-icons',
  props: {
    iconName: { required: true },
  },
  components: {
    Assignment,
    Home,
    Person,
    Settings
  }
}

</script>

// <style lang="scss">
// @import "@/assets/scss/vuexy/components/featherIcon.scss"
// </style>
