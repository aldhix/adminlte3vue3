<script>
import ContentWraper from "../components/ContentWraper.vue";
import FormGroup from "../components/FormGroup.vue";
import FormInput from "../components/FormInput.vue";
import ButtonSave from "../components/ButtonSave.vue";
export default {
  components: {
    ContentWraper,
    FormGroup,
    FormInput,
    ButtonSave,
  },
  data() {
    return {
      dataError: {
        errors: {
          name: ["Name is required."],
          email: ["Email is required."],
          password: ["Password is required."],
        },
      },
      input: {},
    };
  },
  methods: {
    action() {
      window.toastr.success(
        `Name:${this.input.name}, Email:${this.input.email}, Password:${this.input.password},`
      );
    },
  },
};
</script>
<template>
  <content-wraper :title="{ name: 'User', icon: 'fas fa-user' }">
    <div class="row">
      <div class="col-md-6">
        <form class="card card-light" @submit.prevent="action()">
          <div class="card-header">
            <h4 class="card-title">Form User</h4>
          </div>
          <div class="card-body">
            <form-group>
              <label for="">Name</label>
              <form-input
                v-model="input.name"
                :data-invalid="{ name: 'name', data: dataError }"
              />
            </form-group>
            <form-group>
              <label for="">Email</label>
              <form-input
                v-model="input.email"
                :data-invalid="{ name: 'email', data: dataError, hide: true }"
                type="email"
              />
            </form-group>
            <form-group>
              <label for="">Password</label>
              <form-input
                v-model="input.password"
                :data-invalid="{ name: 'password', data: dataError }"
                type="password"
              />
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
