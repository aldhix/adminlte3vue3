<script>
  import ContentWraper from "../components/ContentWraper.vue";
  import FormGroup from "../components/FormGroup.vue";
  import FormInput from "../components/FormInput.vue";
  import FormSelect from "../components/FormSelect.vue";
  import FormTextarea from "../components/FormTextarea.vue";
  import ButtonSave from "../components/ButtonSave.vue";
  import FormSelectInput from "../components/FormSelectInput.vue";
  import FormSelectInputMultiple from "../components/FormSelectMultiple.vue"
  export default {
    components: {
      ContentWraper,
      FormGroup,
      FormInput,
      FormSelect,
      FormTextarea,
      ButtonSave,
      FormSelectInput,
      FormSelectInputMultiple
    },
    data() {
      return {
        gender: [
          ['M','Male'],
          ['F','Female']
        ],
        company : [
          ['facebook','Facebook'],
          ['google','Google'],
          ['amazon','Amazon'],
          ['tesla','Tesla'],
        ],
        input: {
          select: null,
          select2:null,
        },
        error: {
          errors: {
            input: ["Input is required"],
            select: ["Select is required"],
            select2: ["Select2 is required"],
            multiple: ["Select Multiple is required"],
            textarea: ["Textarea is required"],
          },
        },
      };
    },
    methods: {
      action() {
        let input = this.input;
        window.toastr.success(
          `Input:${input.input},<br>Select:${input.select},<br>Select2:${input.select2},<br>Select Multiple:${input.multiple},<br>Textarea:${input.textarea}`
        );
      },
    },
  };
</script>
<template>
  <content-wraper :title="{ name: 'Forms', icon: 'fas fa-edit' }">
    <div class="row">
      <div class="col-md-6">
        <form class="card card-info" @submit.prevent="action()">
          <div class="card-header">
            <h4 class="card-title">Forms</h4>
          </div>
          <div class="card-body">
            <form-group>
              <label for="">Input</label>
              <form-input placeholder="Input..." v-model="input.input" :data-error="{ name: 'input', data: error }" />
            </form-group>
            <form-group>
              <label for="">Select</label>
              <form-select v-model="input.select" :data-error="{ name: 'select', data: error }">
                <option :value="null">Pilih</option>
                <option v-for="(value, index) in gender" :value="value" :key="index">
                  {{ value }}
                </option>
              </form-select>
            </form-group>
            <form-group>
              <label for="">Select Input</label>
              <form-select-input id="bselect-multi" v-model="input.select2" :data-error="{ name: 'select2', data: error }" title="Pilih">
                <option :value="null">Pilih</option>
                <option v-for="(value, index) in gender" :value="value[0]" :key="index">
                  {{ value[1] }}
                </option>
              </form-select-input>
            </form-group>
            <form-group>
              <label for="">Select Input Multiple</label>
              <form-select-input-multiple v-model="input.multiple" :data-error="{ name: 'multiple', data: error }" title="Pilih">
                <option :value="null">Pilih</option>
                <option v-for="(value, index) in company" :value="value[0]" :key="index">
                  {{ value[1] }}
                </option>
              </form-select-input-multiple>
            </form-group>
            <form-group>
              <label for="">Textarea</label>
              <form-textarea placeholder="Textarea.." v-model="input.textarea"
                :data-error="{ name: 'textarea', data: error }" />
            </form-group>
          </div>
          <div class="card-footer">
            <button-save />
          </div>
        </form>
      </div>
    </div>
  </content-wraper>
</template>