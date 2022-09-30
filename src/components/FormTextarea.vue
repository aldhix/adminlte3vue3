<script>
import FormConfig from "./inc/FormConfig";
export default {
  ...FormConfig,
};
</script>
<template>
  <textarea
    class="form-control form-control-sm"
    v-bind="$attrs"
    v-model="value"
    :class="{ 'is-invalid': isInvalid() }"
  ></textarea>
  <div class="invalid-feedback" v-if="isInvalid() && !dataInvalid.hide">
    {{ dataInvalid.data.errors[dataInvalid.name][0] }}
  </div>
</template>
