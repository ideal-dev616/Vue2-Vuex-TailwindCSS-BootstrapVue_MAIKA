<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    v-if="canSee"
    :class="[
      {'vs-sidebar-item-active'            : activeLink},
      {'disabled-item pointer-events-none' : isDisabled}
    ]" 
    class="vs-sidebar--item"
    >
      <router-link
        tabindex="-1"
        v-if="to"
        exact
        :class="[{'router-link-active': activeLink}]"
        :to="to"
        :target="target" >
          <my-icons :iconName="icon"/>
          <slot />
      </router-link>

      <a v-else :target="target" :href="href" tabindex="-1">
        <my-icons :iconName="icon"/>
        <slot />
      </a>
  </div>
</template>

<script>
import Assignment from '../../../components/my-icons/Assignment.vue';
import MyIcons from '../../../components/my-icons/MyIcons.vue';
export default {
  name: 'v-nav-menu-item',
  props: {
    icon        : { type: String,                 default: ''               },
    iconSmall   : { type: Boolean,                default: false            },
    iconPack    : { type: String,                 default: 'material-icons' },
    href        : { type: [String, null],         default: '#'              },
    to          : { type: [String, Object, null], default: null             },
    slug        : { type: String,                 default: null             },
    index       : { type: [String, Number],       default: null             },
    featherIcon : { type: Boolean,                default: true             },
    target      : { type: String,                 default: '_self'          },
    isDisabled  : { type: Boolean,                default: false            }
  },
  computed: {
    canSee () {
      this.$acl.check(this.$store.state.AppActiveUser.userRole)
      return this.to ? this.$acl.check(this.$router.match(this.to).meta.rule) : true
    },
    activeLink () {
      return !!((this.to === this.$route.path || this.$route.meta.parent === this.slug) && this.to)
    }
  },
  components: {
    Assignment,
    MyIcons
  },
}

</script>

