<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-10" to="/">
        <img src="img/only-logo.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-4 collapse-brand">
          <router-link slot="brand" class="navbar-brand mr-lg-10" to="/">
            <img src="img/only-logo.png" alt="logo" />
          </router-link>
        </div>

        <div class="col-8 mt-3 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link servicesspan"
            data-toggle="dropdown"
            role="button"
          >
            <span class="nav-link-inner--text">Szolgáltatások</span>
          </a>
          <router-link to="/Energyopt" class="dropdown-item"
            >Energia felhasználás optimalizálás
          </router-link>
          <router-link to="/system_improve" class="dropdown-item"
            >Rendszer korszerűsítés</router-link
          >
          <router-link to="/smarthome" class="dropdown-item"
            >Okos otthon rendszerek</router-link
          >
          <router-link to="/boiler" class="dropdown-item"
            >Villanybojler karbantartás, telepítés</router-link
          >
          <router-link to="/electric" class="dropdown-item"
            >Elektromos hálózat és berendezés karbantartás</router-link
          >
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/ENFO-Vill-106316838833911"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
.navbar-brand img {
  height: 5em !important;
  width: auto !important;
}
</style>
