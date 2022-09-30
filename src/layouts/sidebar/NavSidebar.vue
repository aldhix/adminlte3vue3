<script>
import NavItem from "./nav_sidebar/NavItem.vue";
import NavTreeview from "./nav_sidebar/NavTreeview.vue";
import MenuSidebar from "../menus/MenuSidebar"
export default {
  components: {
    NavItem,
    NavTreeview,
  },
  data() {
    return {
      menu: MenuSidebar,
    };
  },
};
</script>
<template>
  <nav class="mt-2">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <template v-for="(key, index) in menu" :key="index">
            <nav-treeview :title="{ name:key.name, icon:key.icon }" :sub-menu="key.submenu" v-if="key.submenu"/>
            <nav-item :title="{ name:key.name, icon:key.icon }" :to="key.to" :sub-path="key.subPath" v-else/>
      </template>
    </ul>
  </nav>
</template>
