<script>
  import ContentWraper from "../components/ContentWraper.vue";
  import FormGroup from "../components/FormGroup.vue";
  import FormInput from "../components/FormInput.vue";
  import FormSelect from "../components/FormSelect.vue";
  import FormTextarea from "../components/FormTextarea.vue";
  import ButtonSave from "../components/ButtonSave.vue";
  import FormSelect2 from "../components/FormSelect2.vue";

  export default {
    components: {
      ContentWraper,
      FormGroup,
      FormInput,
      FormSelect,
      FormTextarea,
      ButtonSave,
      FormSelect2,
    },
    data() {
      return {
        gender: ["Male", "Female"],
        input: {
          select: null,
          select2:null,
        },
        error: {
          errors: {
            input: ["Input is required"],
            select: ["Select is required"],
            select2: ["Select2 is required"],
            textarea: ["Textarea is required"],
          },
        },
      };
    },
    methods: {
      action() {
        let input = this.input;
        window.toastr.success(
          `Input:${input.input},<br>Select:${input.select},<br>Select2:${input.select2},<br>Textarea:${input.textarea}`
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
              <form-input placeholder="Input..." v-model="input.input" :dataInvalid="{ name: 'input', data: error }" />
            </form-group>
            <form-group>
              <label for="">Select</label>
              <form-select v-model="input.select" :dataInvalid="{ name: 'select', data: error }">
                <option :value="null">Pilih</option>
                <option v-for="(value, index) in gender" :value="value" :key="index">
                  {{ value }}
                </option>
              </form-select>
            </form-group>
            <form-group>
              <label for="">Select2</label>
              <form-select2 v-model="input.select2" :dataInvalid="{ name: 'select2', data: error }" title="Pilih">
                <option :value="null">Pilih</option>
                <option v-for="(value, index) in gender" :value="value" :key="index">
                  {{ value }}
                </option>
              </form-select2>
            </form-group>
            <form-group>
              <label for="">Textarea</label>
              <form-textarea placeholder="Textarea.." v-model="input.textarea"
                :dataInvalid="{ name: 'textarea', data: error }" />
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