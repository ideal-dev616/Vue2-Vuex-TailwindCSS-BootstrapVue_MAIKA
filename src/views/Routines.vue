<template>
  <div id="page-user-view">

    <div class="grid lg:grid-cols-11 lg:gap-10">
        <div class="lg:col-span-2">    
          <vx-card  v-if="!editing.value" title="Users/Location" class="mb-base px0">
            <div class="sub-title px-4">
                Type of targeted entity
            </div>  
            
            <v-select :options="['User','Location']" v-model="entityType" class="px-4" />
            
            <div v-if="entityType == 'User'">
              <div class="px-4 flex mt-6 items-center">
                  <span class="w-2/5 c-1">Filter by</span>
                  <v-select :options="['User','Location']" class="w-3/5 "/>
              </div>
              <div class="mt-8 mb-2">
                <ul>
                  <li class="cursor-pointer" v-for="(contact, index) in contacts" :key="index">
                    <user-item :contact="contact" :narrow="narrow"/>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="entityType == 'Location'" class="mt-4">
              <location-row v-for="(location, index) in locations" :key="index" :rowIndex="index" :selected="index == selectedLocation.index" :title="location.title" v-bind.sync="selectedLocation" />
            </div>
            
            <div class="mt-12">
              <b-button variant="primary" class="bottom-btn create flex items-center mx-auto">
                <feather-icon icon="PlusCircleIcon"/>
                CHOOSE
              </b-button>
            </div>

          </vx-card>
        </div>


<!-- 2nd Column -->
        <div class="lg:col-span-4">    
          <vx-card title="Trigger Condition" :titleIcon="editing.value ? 'arrow-left': ''" class="mb-base" v-bind.sync="editing">
            <div class="w-full flex items-center">
              <span class="text-nowrap mr-8 f-18-22 c-1">Via Device</span>
              <v-select :options="devices" label="title" class="select-with-image w-full">
                <template slot="option" slot-scope="option">
                    <img :src="option.image" width="22px" height="22px"/>{{ option.title }}
                </template>
                <template slot="selected-option" slot-scope="option" :value="option.level">
                  <img :src="option.image" width="22px" height="22px" />{{ option.title }}
                </template>
              </v-select>
              <feather-icon icon="XCircleIcon" class="ml-4 cursor-pointer" style="color: #C03221; visibility: hidden" />
            </div>

            <div class="f-18-22 h-29 mt-4 c-1 flex items-center">
              when <span class="c-b ml-2">Lí Nguyễn</span>
            </div>

            <div class="flex" style="margin-top: 18px; margin-bottom: 14px;">
              <div class="flex items-center">
                <p-check class="p-icon p-smooth" color="my-primary">
                  <i slot="extra" class="icon mdi mdi-check">
                    <feather-icon icon="CheckIcon" svgClasses="h-4 w-4 cursor-pointer text-success" class="hover:text-danger"/>
                  </i>
                </p-check>
              </div>
              <img :src="require('@/assets/images/svg/recognize-face-camera.svg')"/>
              <span class="f-16-28 c-2 ml-px-10">is recognized with face by camera</span>
            </div>

            <div class="flex">
              <div class="flex items-center">
                <p-check class="p-icon p-smooth" color="my-primary">
                  <i slot="extra" class="icon mdi mdi-check">
                    <feather-icon icon="CheckIcon" svgClasses="h-4 w-4 cursor-pointer text-success" class="hover:text-danger"/>
                  </i>
                </p-check>
              </div>
              <img :src="require('@/assets/images/svg/raise-either-hand-up.svg')"/>
              <span class="f-16-28 c-2 ml-px-10">raises either hand up</span>
            </div>

            <div class="f-24-29" style="margin-top: 27px; margin-bottom: 18px;">
              Actions to take
            </div>

            <div>
              <action-row v-for="(action, index) in actions" :actionIndex="index" :actionType="action.action" :key="index" v-bind.sync="reaction" />
            </div>

            <div v-if="editing.value" class="mt-12 flex justify-between">
                <b-button variant="outline-primary" class="f-14-17 h-41 flex items-center pr-6" @click="addAction">
                  <feather-icon icon="PlusCircleIcon" class="svg-w-20-mr-14"/>
                  ADD
                </b-button>
                <div class="flex">
                  <b-button variant="outline-danger" class="f-14-17 h-41 flex items-center mr-6 px-6" @click="addAction">
                    DELETE
                  </b-button>
                  <b-button variant="primary" class="create flex items-center px-6" @click="create">
                    EDIT
                  </b-button>
                </div>
            </div>

            <div v-else class="mt-12 flex justify-between">
                <b-button variant="outline-primary" class="f-14-17 h-41 flex items-center pr-6" @click="addAction">
                  <feather-icon icon="PlusCircleIcon" class="svg-w-20-mr-14"/>
                  ADD
                </b-button>
                <b-button variant="success" class="bottom-btn create flex items-center" @click="create">
                    <img :src="require('@/assets/images/svg/stack-arrow-forward.svg')" class="mr-2"/>
                    CREATE
                </b-button>
            </div>
            

          </vx-card>
        </div>

<!-- 3rd Column -->
        <div class="lg:col-span-5">    
          <vx-card  v-if="!editing.value" title="All Routines" class="mb-base">
            <div class="grid grid-cols-9 gap-8 mb-1">
              <div class="col-span-1 flex items-center">
                <p-check class="p-icon p-smooth ml-6 p-check-22">
                  <i slot="extra" class="icon mdi mdi-check">
                    <feather-icon icon="CheckIcon" svgClasses="h-4 w-4 cursor-pointer text-success" class="hover:text-danger"/>
                  </i>
                </p-check>
              </div>
              <div class="col-span-4">              
                <search-field placeholder="Search by User name" />
              </div>
              <div class="col-span-2">              
                <v-select :options="['foo','bar']" placeholder="Filter by" />
              </div>
              <div class="col-span-2">              
                <v-select :options="['foo','bar']" placeholder="Actions" />
              </div>              
            </div>

            <div class="mb-12">
              <ul class="mt-8">
                <li class="cursor-pointer" v-for="(contact, index) in contacts" :key="index">
                  <routine-row :contact="contact" v-bind.sync="editing"/>
                </li>
              </ul>
            </div>             
          </vx-card>
        </div>
    </div>
  </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import vSelect from 'vue-select'
import UserItem from '../components/UserItem.vue'
import RoutineRow from '../components/RoutineRow.vue'
import moduleChat          from '@/store/chat/moduleChat.js'
import { contacts } from './data'
import ActionRow from '../components/ActionRow.vue'
import SearchField from '../components/SearchField.vue'
import LocationRow from '../components/LocationRow.vue'

export default {  
  data () {
    return {
      user_data: null,
      user_not_found: false,
      entityType: null,
      contacts: contacts,
      narrow: true,
      reconigedByCamera: true,
      editing: {
        value: false,
      },
      locations: [
        {
          value: 0,
          title: 'Main Office',
        },
        {
          value: 1,
          title: 'Vĩnh Long Office',
        },
        {
          value: 2,
          title: 'Tân Bình Showroom',
        }
      ],
      selectedLocation: {
        index: 0
      },
      selectedLocationIndex: 0,
      devices: [
                {
                  value: 0,
                  title:"Camera HANET - Entry Door",
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
          action: -1,
        }
      ],
      reaction: {
        remove: -1,
        change: -1,
        changeAction: -1,    
      }     
    }
  },
  computed: {
  },
  watch: {
    reaction: {
      handler: function (newReaction) {
        if (newReaction.remove > -1) {
          this.actions.splice(newReaction.remove, 1)
          newReaction.remove = -1
        }

        if (newReaction.change > -1) {
          this.actions[newReaction.change].action = newReaction.changeAction
          console.log(this.actions)
          newReaction.change = -1
          newReaction.changeAction = -1
        }
      },
      deep: true,
    },

    selectedLocation: {
      handler: function (newSelectedLocation) {
        console.log("== index = ", newSelectedLocation.index)
      }
    }
  },
  methods: {
    addAction () {
      this.actions.push({action: -1});
    },
    create () {

    },
  },
  components: {
    'v-select': vSelect,
    'user-item': UserItem,
    'routine-row': RoutineRow,
    'action-row': ActionRow,
    'search-field': SearchField,
    'location-row': LocationRow,
  }
}

</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

#card_container_2 {
  margin-left: 17px;
  margin-right: 17px;
}

@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }
}

</style>

<style lang="scss">
  @import "@/assets/scss/vuexy/extraComponents/_form.scss";
  @import "@/assets/scss/vuexy/extraComponents/_button.scss";
  @import "@/assets/scss/vuexy/extraComponents/_select.scss";
</style>
