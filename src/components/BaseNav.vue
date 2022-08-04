<template>
  <nav
    class="navbar fixed-top navbar-light"
    :class="[
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-transparent': transparent },
      { rounded: round },
    ]"
  >
    <slot name="container-pre"></slot>
    <slot name="brand">
      <a class="navbar-brand" href="#" @click.prevent="onTitleClick">
        {{ title }}
      </a>
    </slot>
    <div class="col-xl-4 col info">
      <div class="row">
        
          <a class="link-reach phone-tag" href="" style="margin-right:1em;">
            <i class="ni ni-mobile-button mr-1"> </i>
            <span style="color:white !important;">+36-20-669-9150</span>
          </a>
        
          <a class="link-reach email-tag" href="">
            <i class="ni ni-email-83 mr-1"> </i>
            <span style="color:white !important; margin:auto;">
              info@enfo-vill.hu
            </span>
          </a>
        
      </div>
    </div>
    <navbar-toggle-button
      :toggled="toggled"
      :target="contentId"
      @click.native.stop="toggled = !toggled"
    >
    </navbar-toggle-button>

    <slot name="container-after"></slot>

    <div
      class="collapse navbar-collapse"
      :class="{ show: toggled }"
      :id="contentId"
      v-click-outside="closeMenu"
    >
      <div class="navbar-collapse-header">
        <slot name="content-header" :close-menu="closeMenu"></slot>
      </div>
      <slot :close-menu="closeMenu"></slot>
    </div>
  </nav>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "base-nav",
  components: {
    FadeTransition,
    NavbarToggleButton,
  },
  props: {
    type: {
      type: String,
      default: "primary",
      description: "Navbar type (e.g default, primary etc)",
    },
    title: {
      type: String,
      default: "",
      description: "Title of navbar",
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description:
        "Explicit id for the menu. By default it's a generated random number",
    },
    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light|dark)",
    },
    round: {
      type: Boolean,
      default: false,
      description: "Whether nav has rounded corners",
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent",
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class",
    },
  },
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>
<style>
.navbar {
  position: fixed !important;
  top: 0 !important;
  background-color: rgba(0, 0, 0, 0.509) !important;
  height: 3em !important;
  max-height: 3em !important;
  display: flex !important;
  align-content: center !important;
  padding: 0 !important;
  backdrop-filter: blur(5px);
}

@media screen and (max-width: 769px) {
  /* .info {
    display: none;
  } */
  .email-tag{
    display: none;
  }
}

.link-reach{
  color: white;
}
.link-reach:hover{
  color: white;
}
</style>
