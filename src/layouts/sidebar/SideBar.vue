<script>
import BrandLink from "./BrandLink.vue"
import UserPanel from "./UserPanel.vue"
import SidebarSearch from "./SidebarSearch.vue"
import NavSidebar from "./NavSidebar.vue"
export default {
    components:{
        BrandLink, UserPanel, SidebarSearch, NavSidebar
    }
}
</script>
<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <brand-link />

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <user-panel />

      <!-- SidebarSearch Form -->
      <sidebar-search />

      <!-- Sidebar Menu -->
      <nav-sidebar />
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>