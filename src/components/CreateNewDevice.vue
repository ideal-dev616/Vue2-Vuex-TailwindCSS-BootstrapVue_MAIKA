<template>
    <div :style="style">
        <div class="overlay">
        </div>
        <my-notify v-if="notify.show" text="You’ve successfully added a new Device" style="z-index: 63000 !important" v-bind.sync="notify"/>
        
        <div class="component-on-overlay" v-else>
            <div class="popup-on-overlay">
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                        <div class="f-24-29 mb-12">
                            Create New Device
                        </div>

                        <div class="grid grid-cols-2 gap-8 mb-1">
                            <div class="flex items-center col-span-1">
                                <div class="w-1/3 f-16-19">
                                    Location
                                </div>
                                <div class="w-2/3">
                                    <v-select :options="['Entry Door', 'Warehouse', 'Meeting Room']"/>
                                </div>
                            </div>

                            <div class="flex items-center col-span-1">
                                <div class="w-1/3 f-16-19">
                                    Device Type
                                </div>
                                <div class="w-2/3">
                                    <v-select :options="['Camera AI', 'Smart Celling Fan']" />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-5 gap-8 mt-8 mb-16">
                            <div class="flex items-center col-span-1 f-16-19">
                                Brand
                            </div>
                            <div class="col-span-3">
                                <search-field />
                            </div>
                            <div class="col-span-1">
                                <b-button variant="outline-primary">SELECT</b-button>
                            </div>
                        </div>

                        <div class="w-full mt-2 mb-2">
                            <validation-provider
                                name="Device"
                                :rules="{ required: true, min: 1 }"
                                v-slot="validationContext"
                            >
                                <b-form-group label="Choose a unique name for this device" label-for="device">
                                    <b-form-input
                                        id="device"
                                        name="device"
                                        v-model="device"
                                        :state="getValidationState(validationContext)"
                                        aria-describedby="device-live-feedback"
                                        class="my-bootstrap"
                                        placeholder="enter Device name"
                                    ></b-form-input>

                                    <b-form-invalid-feedback>Please provide a valid device</b-form-invalid-feedback>
                                    <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                                </b-form-group>
                            </validation-provider>
                        </div>

                        <div class="mt-20 flex justify-between">
                            <b-button variant="" class="bottom-btn back create flex items-center" @click="cancel">
                                CANCEL
                            </b-button>
                            <b-button variant="success" class="bottom-btn create flex items-center" @click="clickNewDevice">
                                <feather-icon icon="PlusCircleIcon"/>
                                NEW DEVICE
                            </b-button>
                        </div>

                    </b-form>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SearchField from './SearchField.vue'
import MyNotify from './MyNotify.vue'

export default {
    data() {
        return {
            location: null,
            deviceType: null,
            brand: null,
            device: null,
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
                    this.$emit('update:device', false)
                }
            },
            deep: true,
        }
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        clickNewDevice() {
            this.notify.show = true;
        },
        cancel() {
            this.$emit('update:device', false);
        },     
    },
    components: {
        'v-select': vSelect,
        'search-field': SearchField,
        'my-notify': MyNotify,
    },
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

        /* background: rgba(127, 134, 142, 0.8);
        backdrop-filter: blur(5.44px); */
        background-color: transparent;
        z-index: 61000;    
    }

    @media (max-width: 1200px) {
        .component-on-overlay {
            left: 0px !important;
        }
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

    .btn-outline-primary {
        font-size: 14px !important;
        line-height: 17px !important;
        height: 44px;
    }
</style>



<style lang="scss">

</style>
