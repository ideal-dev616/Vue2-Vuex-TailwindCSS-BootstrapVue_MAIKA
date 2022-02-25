<template>
    <div class="mt-2 mb-4 flex items-start my-action-first-row">
        <validation-provider
            name="MaikaRespond"
            :rules="{ required: true, min: 1 }"
            v-slot="validationContext"
        >
            <b-form-group>
                <b-form-input
                    name="maikaRepond"
                    v-model="textValue"
                    :state="getValidationState(validationContext)"
                    aria-describedby="maikaRepond-live-feedback"
                    style="height: 56px !important" 
                    @input="changeRow($event)"               
                ></b-form-input>

                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
            </b-form-group>
        </validation-provider>
        <feather-icon v-if="isLastIndex" icon="PlusCircleIcon" class="ml-4 mt-4 cursor-pointer" style="color: #232D42" @click="addRow" />
        <feather-icon v-else icon="MinusCircleIcon" class="ml-4 mt-4 cursor-pointer" style="color: #232D42" @click="removeRow" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textValue: '',
            }
        },

        props: {
            isLastIndex: { type: Boolean, required: true },
            content: { type: String, required: true },
            rowIndex: { type: Number, required: true },
        },

        methods: {
            getValidationState({ dirty, validated, valid = null }) {
                return dirty || validated ? valid : null;
            },
            addRow() {
                this.$emit("update:add", true)
            },
            removeRow() {
                this.$emit("update:remove", this.rowIndex)
            },
            changeRow(e) {
                console.log(e)
                this.$emit("update:change", {index: this.rowIndex, content: e})
            }
        },

        watch: {
            content: {
                handler: function (newContent) {
                    console.log("=== content: ", newContent)
                    this.textValue = newContent
                }
            },
        },

        components: {
        }
    }
</script>

<style lang="scss">
    .my-action-first-row {
        span:not(.feather-icon) {
            width: 100% !important;
        }
    }
</style>
