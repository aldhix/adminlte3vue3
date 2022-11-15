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
            let data = this.dataError.data
            try {
                return this.dataError.name in data.errors
            } catch (error) {
                return false
            }
        },
        removeError() {
            let data = this.dataError.data
            try {
                delete data.errors[this.dataError.name]
            } catch (error) {
                //
            }
        },
    },
}