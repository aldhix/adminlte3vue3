export default {
    inheritAttrs: false,
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            type: [String, Number],
        },
        dataInvalid: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.removeError();
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        isInvalid() {
            let data = this.dataInvalid.data
            try {
                return this.dataInvalid.name in data.errors
            } catch (error) {
                return false
            }
        },
        removeError() {
            let data = this.dataInvalid.data
            try {
                delete data.errors[this.dataInvalid.name]
            } catch (error) {
                //
            }
        },
    },
}