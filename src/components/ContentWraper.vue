<script>
export default {
    props:{
        title:{
            type:Object,
            default:() => ({})
        }
    },
    beforeMount(){
        let title = this.title.name
        $("title").html(title ?? 'AdminLTE')
    }
}
</script>
<template>
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid mb-2">
        <h1 class="m-0" v-if="title.name"><i class="mr-2" :class="title.icon" v-if="title.icon"></i>{{ title.name }}</h1>
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <slot></slot>
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
</template>