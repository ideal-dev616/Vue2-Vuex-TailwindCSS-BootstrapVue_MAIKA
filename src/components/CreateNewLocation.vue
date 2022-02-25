<template>
    <div :style="style">
        <div class="overlay">
        </div>

        <my-notify v-if="notify.show" text="You’ve successfully added a new Location" style="z-index: 63000 !important" v-bind.sync="notify"/>

        <div class="component-on-overlay" v-else>
            <div class="popup-on-overlay">
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                        <div class="f-24-29 mb-12">
                            Create New Location
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/6 f-16-19">
                                Address
                            </div>
                            <div class="w-5/6">
                                <vs-input placeholder="enter location address" class="w-full"/>
                            </div>
                        </div>

                        <div class="flex justify-between mt-8 mb-8">
                            <div class="w-2/5">
                                <validation-provider
                                name="City"
                                :rules="{ required: true, min: 1 }"
                                v-slot="validationContext"
                                >
                                    <b-form-group label="City" label-for="city">
                                        <b-form-input
                                            id="city"
                                            name="city"
                                            v-model="city"
                                            :state="getValidationState(validationContext)"
                                            aria-describedby="city-live-feedback"
                                            class="my-bootstrap"
                                        ></b-form-input>

                                        <b-form-invalid-feedback>Please provide a valid city</b-form-invalid-feedback>
                                        <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </div>
                            <div class="w-1/2">
                                <validation-provider
                                    #default="{ errors }"
                                    name="Country"
                                    rules="required"
                                >
                                    <b-form-group
                                        label="Country"
                                        label-for="country"
                                        :state="errors.length > 0 ? false:null"
                                    >
                                        <v-select
                                            id="country"
                                            v-model="selectedContry"
                                            :options="countries"
                                            :selectable="option => ! option.value.includes('select_value')"
                                            label="text"
                                        />
                                        <b-form-invalid-feedback :state="errors.length > 0 ? false:null">
                                            Please provide a valid country
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </div>
                        </div>

                        <div class="w-full mb-2">
                            <validation-provider
                            name="Location"
                            :rules="{ required: true, min: 1 }"
                            v-slot="validationContext"
                            >
                                <b-form-group label="Choose a unique name for this location" label-for="location">
                                    <b-form-input
                                        id="location"
                                        name="location"
                                        v-model="location"
                                        :state="getValidationState(validationContext)"
                                        aria-describedby="location-live-feedback"
                                        class="my-bootstrap"
                                        placeholder="enter Location name"
                                    ></b-form-input>

                                    <b-form-invalid-feedback>Please provide a valid location</b-form-invalid-feedback>
                                    <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                                </b-form-group>
                            </validation-provider>
                        </div>

                        <div class="mt-8">
                            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" class=" toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                            </div>
                            <label for="toggle" class="f-16-28">Set this location as default</label>
                        </div>

                        <div class="mt-20 flex justify-between">
                            <b-button variant="" class="bottom-btn back create flex items-center" @click="cancel">
                                CANCEL
                            </b-button>
                            <b-button variant="success" class="bottom-btn create flex items-center" @click="clickNewLocation">
                                <feather-icon icon="PlusCircleIcon"/>
                                NEW LOCATION
                            </b-button>
                        </div>

                    </b-form>
                </validation-observer>
            </div>
        </div>
    </div>
</template>


<script>
import { countries } from './data/data.js'
import vSelect from 'vue-select'
import MyNotify from './MyNotify.vue'

export default {
    data() {
        return {
            city: '',
            countries: countries,
            selectedContry: null,
            location: null,
            checked: false,
            notify: {
                show: null,
            },
        }
    },
    props: {
        disp: { type: Boolean, default: false },
    },
    computed: {
        style () {
            return 'display: ' + (this.disp ? 'block': 'none')
        }
    },
    watch: {
        notify: {
            handler: function(newNotify) {
                if (newNotify.show === false) {
                    this.notify.show = null
                    this.$emit('update:location', false)
                }
            },
            deep: true,
        }
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        clickNewLocation() {
            this.notify.show = true;
        },
        cancel() {
            this.$emit('update:location', false);
        }        
    },
    components: {
        'v-select': vSelect,
        'my-notify': MyNotify,
    }   
}
</script>


<style>
    .component-on-overlay {
        position: absolute;
        left: -205px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 100vw;
        height: 100vh;

        background: rgba(127, 134, 142, 0.8);
        backdrop-filter: blur(5.44px);
        z-index: 61000;    
    }

    .popup-on-overlay {
        width: 706px !important;
        position: absolute;
        left: calc( (100vw - 706px) / 2) !important;
        top: 110px;
        background-color: white;
        border-radius: 20px;
        padding: 37px 42px 48px 33px !important;
    }

    @media (max-width: 1200px) {
        .component-on-overlay {
            left: 0px !important;
        }
    }

    .toggle-checkbox:checked {        
        right: 4px !important;
        border: solid 2px #3A57E8 !important;
    }
    .toggle-checkbox:checked + .toggle-label {
        background-color: #C4CCF8;
    }
    .toggle-checkbox {
        /* background-color: rgb(209, 213, 219) !important; */
        border: solid 2px rgb(229,231,235) !important;
        width: 16px !important;
        height: 16px !important;        
        top: 2px !important;
    }
    .toggle-checkbox:not(:checked) {
        left: 2px;
    }
    .toggle-checkbox + .toggle-label {
        width: 38px;
        height: 20px !important;
        background-color: rgb(209, 213, 219);
    }

    .vs-input--placeholder.normal {
        font-size: 18px !important;
        line-height: 22px !important;
        color: #8A92A6 !important;
    }

    .vs-input--input.normal {
        height: 44px !important;
    }
</style>

<style lang="scss">

</style>
