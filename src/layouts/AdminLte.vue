<script>
import NavBar from "./navbar/NavBar.vue"
import SideBar from "./sidebar/SideBar.vue"
export default {
    components:{
        NavBar, SideBar
    }
}
</script>
<template>
  <!-- Navbar -->
  <nav-bar />
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <side-bar />

  <!-- Content Wrapper. Contains page content -->
  <router-view></router-view>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</template>