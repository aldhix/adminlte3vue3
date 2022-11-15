<script>
    export default {
        inheritAttrs: false,
        emits: ["update:modelValue"],
        props: {
            modelValue: {
                type: [String, Number],
            },
            dataError: {
                type: Object,
                default: () => ({}),
            },
            id:{
                type: String,
                default: 'bselect'
            }
        },
        computed: {
            value: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit("update:modelValue", value);
                },
            },
        },
        watch:{
            value(newValue){
                this.removeError();
                this.$nextTick(()=>{
                    $(`#${this.id}`).selectpicker('val', newValue);
                });
            }
        },
        mounted(){
            this.$nextTick(()=>{
                $(`#${this.id}`).selectpicker('setStyle','btn-default')
            })
        },
        methods: {
            isInvalid() {
                let data = this.dataError.data;
                try {
                    let has = this.dataError.name in data.errors;
                    if (has){
                        $(`#${this.id}`).parent().addClass('is-invalid')
                        return true
                    } else {
                        return false
                    }
                } catch (error) {
                    return false;
                }
            },
            removeError() {
                let data = this.dataError.data;
                $(`#${this.id}`).parent().removeClass('is-invalid');
                try {
                    delete data.errors[this.dataError.name];
                } catch (error) {
                    //
                }
            },
        },
    };
</script>
<template>
    <select class="form-control form-control-sm text-sm" data-live-search="true" :id="id" v-bind="$attrs" v-model="value"
        :class="{ 'is-invalid': isInvalid() }">
        <slot></slot>
    </select>
    <div class="invalid-feedback" v-if="isInvalid() && !dataError.hide">
        {{ dataError.data.errors[dataError.name][0] }}
    </div>
</template>