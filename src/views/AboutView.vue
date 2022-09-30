<script>
import ContentWraper from "../components/ContentWraper.vue"
export default {
  components:{
    ContentWraper
  }
}
</script>
<template>
  <content-wraper :title="{ name:'About' }">
      <div class="card">
        <div class="card-body">
            <p>
              Hello World!
            </p>
        </div>
      </div>
  </content-wraper>
</template>
