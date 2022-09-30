<script>
import NavItemInline from "./NavItemInline.vue";
import NavbarSearch from "./NavbarSearch.vue";
import NavItemDropdown from "./NavItemDropdown.vue";
export default {
  components: {
    NavItemInline,
    NavbarSearch,
    NavItemDropdown,
  },
};
</script>
<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <nav-item-inline :title="{ name: 'Home' }" :to="{ name: 'home' }" />
      <nav-item-inline :title="{ name: 'About' }" :to="{ name: 'about' }" />
      <nav-item-inline :title="{ name: 'User' }" :to="{ name: 'user' }" />
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <navbar-search />

      <!-- Messages Dropdown Menu -->
      <nav-item-dropdown
        :title="{ icon: 'fa-comments' }"
        :badge="{ type: 'badge-danger', value: 3 }"
        dropdown-type="dropdown-menu-lg"
      >
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img
              src="/adminlte/dist/img/user1-128x128.jpg"
              alt="User Avatar"
              class="img-size-50 mr-3 img-circle"
            />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"
                  ><i class="fas fa-star"></i
                ></span>
              </h3>
              <p class="text-sm">Call me whenever you can...</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1"></i> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img
              src="/adminlte/dist/img/user8-128x128.jpg"
              alt="User Avatar"
              class="img-size-50 img-circle mr-3"
            />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"
                  ><i class="fas fa-star"></i
                ></span>
              </h3>
              <p class="text-sm">I got your message bro</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1"></i> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img
              src="/adminlte/dist/img/user3-128x128.jpg"
              alt="User Avatar"
              class="img-size-50 img-circle mr-3"
            />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"
                  ><i class="fas fa-star"></i
                ></span>
              </h3>
              <p class="text-sm">The subject goes here</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1"></i> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
      </nav-item-dropdown>

      <!-- Notifications Dropdown Menu -->
      <nav-item-dropdown
        :title="{ icon: 'fa-bell' }"
        :badge="{ type: 'badge-warning', value: 15 }"
        dropdown-type="dropdown-menu-lg"
      >
      <span class="dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer"
            >See All Notifications</a
          >
      </nav-item-dropdown>

      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
        >
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
