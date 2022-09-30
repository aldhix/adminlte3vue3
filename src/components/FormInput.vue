<script>
import FormConfig from './inc/FormConfig'
export default {
  ...FormConfig
}
</script>
<template>
  <input
    class="form-control form-control-sm"
    v-bind="$attrs"
    v-model="value"
    :class="{ 'is-invalid': isInvalid() }"
  />
  <div class="invalid-feedback" v-if="isInvalid() && !dataInvalid.hide">
    {{ dataInvalid.data.errors[dataInvalid.name][0] }}
  </div>
</template>
